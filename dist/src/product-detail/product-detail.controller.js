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
exports.ProductDetailController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_detail_dto_1 = require("./DTO/product-detail.dto");
const transaction_dto_1 = require("../transaction/DTO/transaction.dto");
let ProductDetailController = class ProductDetailController {
    constructor(IProductDetailService) {
        this.IProductDetailService = IProductDetailService;
    }
    importExcelProductDetail(params) {
        return this.IProductDetailService.importProductDetail(params);
    }
    getProductDetail(params) {
        return this.IProductDetailService.getProductDetail(params);
    }
    getHistoryTransaction(params) {
        return this.IProductDetailService.getHistoryTransaction(params);
    }
    getProductDetailById(id) {
        return this.IProductDetailService.getProductDetailById(id);
    }
    updateProductDetail(id, params) {
        return this.IProductDetailService.updateProductDetail(id, params);
    }
    removeProductDetail(id) {
        return this.IProductDetailService.removeProductDetail(id);
    }
};
exports.ProductDetailController = ProductDetailController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_detail_dto_1.ProductDetailCreateRequest]),
    __metadata("design:returntype", void 0)
], ProductDetailController.prototype, "importExcelProductDetail", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_detail_dto_1.ProductSearchRequest]),
    __metadata("design:returntype", void 0)
], ProductDetailController.prototype, "getProductDetail", null);
__decorate([
    (0, common_1.Get)('history-transaction'),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.Pagination]),
    __metadata("design:returntype", void 0)
], ProductDetailController.prototype, "getHistoryTransaction", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductDetailController.prototype, "getProductDetailById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_detail_dto_1.ProductDetailUpdateRequest]),
    __metadata("design:returntype", void 0)
], ProductDetailController.prototype, "updateProductDetail", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductDetailController.prototype, "removeProductDetail", null);
exports.ProductDetailController = ProductDetailController = __decorate([
    (0, common_1.Controller)('api/product-detail'),
    (0, swagger_1.ApiTags)('product-detail'),
    __param(0, (0, common_1.Inject)('IProductDetailService')),
    __metadata("design:paramtypes", [Object])
], ProductDetailController);
//# sourceMappingURL=product-detail.controller.js.map