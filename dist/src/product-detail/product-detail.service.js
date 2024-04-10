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
exports.ProductDetailService = void 0;
const common_1 = require("@nestjs/common");
const product_detail_dto_1 = require("./DTO/product-detail.dto");
const product_detail_repository_1 = require("./product-detail.repository");
const product_detail_entity_1 = require("../../entities/product-detail.entity");
const message_1 = require("../../helper/message");
const typeorm_1 = require("typeorm");
const lodash_1 = require("lodash");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("@nestjs/typeorm");
const history_transaction_entity_1 = require("../../entities/history-transaction.entity");
let ProductDetailService = class ProductDetailService {
    constructor(repository, IProductService, historyTransactionEntityRepository) {
        this.repository = repository;
        this.IProductService = IProductService;
        this.historyTransactionEntityRepository = historyTransactionEntityRepository;
        this.saleProduct = async (product, quantity, order) => {
            const productDetails = product.productDetails;
            if (quantity > productDetails.filter((z) => !z.isSale).length) {
                throw new common_1.HttpException(message_1.COMMON_MESSAGE.OUT_OF_STOCK, common_1.HttpStatus.FORBIDDEN);
            }
            for (let i = 0; i < quantity; i++) {
                const index = productDetails.findIndex((item) => item.isSale == false);
                productDetails[index].isSale = true;
                productDetails[index].order = order;
            }
            await this.repository.save(productDetails);
        };
    }
    async getProductDetailById(id) {
        const data = await this.repository.findOne({
            where: { id },
            relations: ['product'],
        });
        if (!data) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.PRODUCT_DETAIL_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        return data;
    }
    async getHistoryTransaction(pagination) {
        const { page, take } = pagination;
        const skip = (page - 1) * take || 0;
        const [data, totalCount] = await this.historyTransactionEntityRepository.findAndCount({
            take,
            skip,
            relations: ['product'],
        });
        const res = data.map(mapHistoryProductDetail);
        return new product_detail_dto_1.HistoryTransactionResponse(res, page, take, totalCount);
    }
    async importProductDetail(productDetailCreateRequest) {
        const { lstInfo, productId } = productDetailCreateRequest;
        const product = await this.IProductService.getProductById(productId);
        if (!product) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.PRODUCT_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const lstProductDetailExisted = await this.repository.find({
            where: { info: (0, typeorm_1.In)(lstInfo) },
            select: { info: true, id: true },
        });
        const lstInfoExisted = lstProductDetailExisted.map((z) => z.info);
        const dataInfo = (0, lodash_1.difference)(lstInfo, lstInfoExisted);
        const lstProductDetails = [];
        dataInfo.forEach((info) => {
            const productDetail = new product_detail_entity_1.ProductDetailEntity();
            productDetail.info = info;
            productDetail.isShow = true;
            productDetail.product = product;
            productDetail.order = null;
            lstProductDetails.push(productDetail);
        });
        const historyEntity = new history_transaction_entity_1.HistoryTransactionEntity();
        if (dataInfo.length != 0) {
            historyEntity.product = product;
            historyEntity.quantity = dataInfo.length;
            await this.historyTransactionEntityRepository.save(historyEntity);
        }
        await this.repository.save(lstProductDetails);
        return new product_detail_dto_1.ProductDetailCreateResponse(dataInfo, lstInfoExisted, lstInfo.length, 0);
    }
    async getProductDetail(query) {
        const { q, take = 10, page = 1 } = query;
        const skip = (page - 1) * take || 0;
        const [data, totalCount] = await this.repository.findAndCount({
            where: { uid: (0, typeorm_1.ILike)(`%${q || ''}%`), isShow: true },
            relations: ['product'],
            select: { product: { title: true } },
            take,
            skip,
        });
        return new product_detail_dto_1.ProductDetailResponse(data, page, take, totalCount);
    }
    async updateProductDetail(id, params) {
        const { isShow, info, productId } = params;
        const productDetail = await this.repository.findOneByOrFail({ id });
        if (!productDetail) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.PRODUCT_DETAIL_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const product = await this.IProductService.getProductById(productId);
        if (product) {
            productDetail.product = product;
        }
        const dataProductSave = (0, class_transformer_1.plainToInstance)(product_detail_entity_1.ProductDetailEntity, Object.assign(Object.assign({}, productDetail), params));
        return this.repository.save(dataProductSave);
    }
    async removeProductDetail(id) {
        const productDetail = await this.repository.findOneByOrFail({ id });
        productDetail.isShow = false;
        return this.repository.save(productDetail);
    }
};
exports.ProductDetailService = ProductDetailService;
exports.ProductDetailService = ProductDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('IProductService')),
    __param(2, (0, typeorm_2.InjectRepository)(history_transaction_entity_1.HistoryTransactionEntity)),
    __metadata("design:paramtypes", [product_detail_repository_1.ProductDetailRepository, Object, typeorm_1.Repository])
], ProductDetailService);
function mapHistoryProductDetail(historyMapEntity) {
    return {
        productTitle: historyMapEntity.product.title,
        quantity: historyMapEntity.quantity,
        createdAt: historyMapEntity.createdAt,
    };
}
//# sourceMappingURL=product-detail.service.js.map