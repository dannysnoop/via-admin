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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../guards/auth.guard");
const message_1 = require("../../helper/message");
const transaction_dto_1 = require("../transaction/DTO/transaction.dto");
const order_dto_1 = require("./DTO/order.dto");
const user_decorator_1 = require("../../decorator/user.decorator");
const user_dto_1 = require("../user/DTO/user.dto");
let OrderController = class OrderController {
    constructor(IOrderService) {
        this.IOrderService = IOrderService;
    }
    createOrder(user, params) {
        return this.IOrderService.createOrder(user, params);
    }
    getUserOrderNew(user) {
        return this.IOrderService.getTopNewOrder();
    }
    getUserOrder(user, query) {
        return this.IOrderService.getUserOrder(user, query);
    }
    async downloadOrder(id, res) {
        const fileName = `log_order_${id}.txt`;
        const data = await this.IOrderService.downloadDetailOrder(id);
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
    }
    getDetailOrder(id) {
        return this.IOrderService.getDetailOder(id);
    }
    getOrder(params) {
        return this.IOrderService.getAllOrder(params);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
    }),
    (0, swagger_1.ApiBody)({ type: order_dto_1.OrderCreateRequest }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto,
        order_dto_1.OrderCreateRequest]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)('/user-order-new'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getUserOrderNew", null);
__decorate([
    (0, common_1.Get)('/user-order'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, transaction_dto_1.Pagination]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getUserOrder", null);
__decorate([
    (0, common_1.Get)('/download-order/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "downloadOrder", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getDetailOrder", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'id', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'username', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'phone', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'uid', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.OrderQueryRequest]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('api/order'),
    (0, swagger_1.ApiTags)('order'),
    __param(0, (0, common_1.Inject)('IOrderService')),
    __metadata("design:paramtypes", [Object])
], OrderController);
//# sourceMappingURL=order.controller.js.map