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
exports.CategoryUpdateRequest = exports.CategoryQueryRequest = exports.CategoryCreateRequest = exports.CategoryResponse = exports.CategoryDto = void 0;
const user_dto_1 = require("../../user/DTO/user.dto");
const swagger_1 = require("@nestjs/swagger");
class CategoryDto {
}
exports.CategoryDto = CategoryDto;
class CategoryResponse extends user_dto_1.UserResponse {
}
exports.CategoryResponse = CategoryResponse;
class CategoryCreateRequest {
}
exports.CategoryCreateRequest = CategoryCreateRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CategoryCreateRequest.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CategoryCreateRequest.prototype, "isShow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CategoryCreateRequest.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CategoryCreateRequest.prototype, "icon", void 0);
class CategoryQueryRequest {
}
exports.CategoryQueryRequest = CategoryQueryRequest;
class CategoryUpdateRequest extends CategoryCreateRequest {
}
exports.CategoryUpdateRequest = CategoryUpdateRequest;
//# sourceMappingURL=category.dto.js.map