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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearchRequest = exports.ProductDetailCreateResponse = exports.ProductDetailUpdateRequest = exports.ProductDetailCreateRequest = exports.ProductDetailResponse = exports.HistoryTransactionResponse = exports.HistoryTransactionDTO = exports.ProductDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../user/DTO/user.dto");
class ProductDetailDto {
}
exports.ProductDetailDto = ProductDetailDto;
class HistoryTransactionDTO {
}
exports.HistoryTransactionDTO = HistoryTransactionDTO;
class HistoryTransactionResponse extends user_dto_1.UserResponse {
}
exports.HistoryTransactionResponse = HistoryTransactionResponse;
class ProductDetailResponse extends user_dto_1.UserResponse {
}
exports.ProductDetailResponse = ProductDetailResponse;
class ProductDetailCreateRequest {
}
exports.ProductDetailCreateRequest = ProductDetailCreateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ProductDetailCreateRequest.prototype, "lstInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductDetailCreateRequest.prototype, "productId", void 0);
class ProductDetailUpdateRequest {
}
exports.ProductDetailUpdateRequest = ProductDetailUpdateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductDetailUpdateRequest.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ProductDetailUpdateRequest.prototype, "isShow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductDetailUpdateRequest.prototype, "productId", void 0);
class ProductDetailCreateResponse {
    constructor(lstNewProduct, listUpdateProduct, totalLine, failNumber) {
        this.lstNewProduct = lstNewProduct;
        this.listUpdateProduct = listUpdateProduct;
        this.totalLine = totalLine;
        this.failNumber = failNumber;
    }
}
exports.ProductDetailCreateResponse = ProductDetailCreateResponse;
class ProductSearchRequest {
    constructor() {
        this.take = 10;
        this.page = 1;
    }
}
exports.ProductSearchRequest = ProductSearchRequest;
//# sourceMappingURL=product-detail.dto.js.map