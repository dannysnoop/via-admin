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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const message_1 = require("../../helper/message");
const category_dto_1 = require("./DTO/category.dto");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const roles_decorator_1 = require("../../decorator/roles.decorator");
const constant_1 = require("../../helper/constant");
let CategoryController = class CategoryController {
    constructor(ICategoryService) {
        this.ICategoryService = ICategoryService;
    }
    GetCategories() {
        return this.ICategoryService.getAllCategory();
    }
    GetCategoriesSearch(body) {
        return this.ICategoryService.searchProductThoughCategory(body.productName);
    }
    GetCategoriesForClient() {
        return this.ICategoryService.getAllCategoryForClient();
    }
    CreateCategory(params) {
        return this.ICategoryService.createCategory(params);
    }
    UpdateCategory(id, params) {
        return this.ICategoryService.updateCategory(id, params);
    }
    GetCategoryById(id) {
        return this.ICategoryService.getCategoryById(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(constant_1.ROLE.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "GetCategories", null);
__decorate([
    (0, common_1.Get)('/search'),
    (0, swagger_1.ApiQuery)({ name: 'productName', type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategorySearchQueryRequest]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "GetCategoriesSearch", null);
__decorate([
    (0, common_1.Get)('/client'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "GetCategoriesForClient", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(constant_1.ROLE.ADMIN),
    (0, swagger_1.ApiBody)({ type: category_dto_1.CategoryCreateRequest }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoryCreateRequest]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "CreateCategory", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(constant_1.ROLE.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, category_dto_1.CategoryUpdateRequest]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "UpdateCategory", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "GetCategoryById", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('api/category'),
    (0, swagger_1.ApiTags)('categories'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Inject)('ICategoryService')),
    __metadata("design:paramtypes", [Object])
], CategoryController);
//# sourceMappingURL=category.controller.js.map