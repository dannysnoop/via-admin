"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_dto_1 = require("./DTO/order.dto");
const order_repository_1 = require("./order.repository");
const order_entity_1 = require("../../entities/order.entity");
const constant_1 = require("../../helper/constant");
const typeorm_1 = require("typeorm");
const message_1 = require("../../helper/message");
const handle_text_1 = require("../../utility/handle-text");
let OrderService = class OrderService {
    constructor(repository, IProductService, IProductDetailService, IUserService, IConfigWebService) {
        this.repository = repository;
        this.IProductService = IProductService;
        this.IProductDetailService = IProductDetailService;
        this.IUserService = IUserService;
        this.IConfigWebService = IConfigWebService;
    }
    async getTopNewOrder() {
        const lstOrderEntity = await this.repository.find({
            relations: ['productDetails', 'product', 'user'],
            take: 13,
            order: { id: 'DESC' },
        });
        return lstOrderEntity.map(mapDataOrder);
    }
    async getAllOrder(query) {
        const { uid, id, username, phone, page = 1, take = 10 } = query;
        const skip = (page - 1) * take || 0;
        let lstUid = (uid && uid.trim().replace('\t', '').split('\n')) || [];
        lstUid = lstUid.map(item => item.trim());
        const product = lstUid.length > 0
            ? { productDetails: { uid: (0, typeorm_1.In)(lstUid) } }
            : { productDetails: true };
        const [data, totalCount] = await this.repository.findAndCount({
            where: {
                user: { username: (0, typeorm_1.ILike)(`%${username || ''}%`), phone },
                id: id || null,
                product,
            },
            relations: ['user', 'product.productDetails', 'productDetails'],
            take,
            skip,
            order: { id: "desc" }
        });
        const orderDto = data.map(mapDataOrder);
        return new order_dto_1.OrderResponse(orderDto, page, take, totalCount);
    }
    async getUserOrder(user, query) {
        const { id } = user;
        const { page = 1, take = 10 } = query;
        const skip = (page - 1) * take || 0;
        const [orders, totalCount] = await this.repository.findAndCount({
            where: { user: { id } },
            relations: ['productDetails', 'product', 'user'],
            skip,
            take,
            order: { id: 'DESC' },
        });
        const orderDtos = orders.map(mapDataOrder);
        return new order_dto_1.OrderResponse(orderDtos, page, take, totalCount);
    }
    async createOrder(user, params) {
        const { productId, quantity } = params;
        if (quantity == 0)
            return;
        const product = await this.IProductService.getProductById(productId);
        const totalPricePay = quantity * product.price * ((100 - user.discount) / 100);
        const userEntity = await this.IUserService.getUserById(user.id);
        if (userEntity.balance < totalPricePay) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.MONEY_NOT_ENOUGH, common_1.HttpStatus.FORBIDDEN);
        }
        const orderEntity = new order_entity_1.OrderEntity();
        orderEntity.user = userEntity;
        orderEntity.product = product;
        orderEntity.quantity = quantity;
        orderEntity.totalPrice = totalPricePay;
        orderEntity.status = constant_1.ORDER_STATUS.SUCCESS;
        const data = await this.repository.save(orderEntity);
        await this.IUserService.minusBalanceForUser(userEntity, totalPricePay);
        await this.IProductDetailService.saleProduct(product, quantity, data);
        delete data.user;
        delete data.product.productDetails;
        return data;
    }
    async getDetailOder(orderId) {
        const data = await this.repository.findOne({
            where: { id: orderId },
            relations: ['productDetails', 'product'],
        });
        if (!data) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.ORDER_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        return mapDataOrder(data);
    }
    async downloadDetailOrder(orderId) {
        const data = await this.getDetailOder(orderId);
        const config = await this.IConfigWebService.getConfig();
        const textConfig = config.contentTXTDownload;
        return (0, handle_text_1.handleText)(data) + textConfig + '\n\n' + data.info.join('\n');
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('IProductService')),
    __param(2, (0, common_1.Inject)('IProductDetailService')),
    __param(3, (0, common_1.Inject)('IUserService')),
    __param(4, (0, common_1.Inject)('IConfigWebService')),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository, Object, Object, Object, Object])
], OrderService);
function mapDataOrder(data) {
    var _a;
    return {
        id: data.id,
        username: (_a = data.user) === null || _a === void 0 ? void 0 : _a.username,
        info: data.productDetails.map((z) => z.info),
        uid: data.productDetails.map((z) => z.uid),
        productName: data.product.title,
        quantity: data.quantity,
        totalPrice: data.totalPrice,
        createdDate: data.createdAt,
    };
}
//# sourceMappingURL=order.service.js.map