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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("./DTO/category.dto");
const category_repository_1 = require("./category.repository");
const class_transformer_1 = require("class-transformer");
const categories_entity_1 = require("../../entities/categories.entity");
const message_1 = require("../../helper/message");
let CategoryService = class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }
    async getCategoryById(id) {
        const data = await this.repository.findOne({
            where: { id, isShow: true, products: { isShow: true } },
            relations: ['products', 'products.productDetails'],
            select: {
                title: true,
                order: true,
                id: true,
                icon: true,
                isShow: true,
                products: {
                    id: true,
                    title: true,
                    price: true,
                    description: true,
                    subDescription: true,
                    isShow: true,
                    productDetails: { id: true, isSale: true },
                },
            },
            order: { order: 'DESC' },
        });
        if (!data) {
            return await this.repository.findOneByOrFail({ id });
        }
        return data;
    }
    async getAllCategory() {
        const [categories, total] = await this.repository.findAndCount();
        return new category_dto_1.CategoryResponse(categories, 0, 1000, total);
    }
    async getAllCategoryForClient() {
        const [categories, total] = await this.repository.findAndCount({
            where: { isShow: true },
            select: {
                title: true,
                order: true,
                id: true,
                icon: true,
                products: true,
            },
            order: { order: 'DESC' },
        });
        return new category_dto_1.CategoryResponse(categories, 0, 1000, total);
    }
    async createCategory(params) {
        const categoryEntity = (0, class_transformer_1.plainToInstance)(categories_entity_1.CategoriesEntity, params);
        return await this.repository.save(categoryEntity);
    }
    async updateCategory(id, params) {
        const category = await this.repository.findOne({ where: { id: +id } });
        if (!category) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.CATEGORY_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const data = (0, class_transformer_1.plainToInstance)(categories_entity_1.CategoriesEntity, Object.assign(Object.assign({}, category), params));
        this.repository.save(data);
        return data;
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoryService);
//# sourceMappingURL=category.service.js.map