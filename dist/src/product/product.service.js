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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("./product.repository");
const product_dto_1 = require("./DTO/product.dto");
const typeorm_1 = require("typeorm");
const message_1 = require("../../helper/message");
const product_entity_1 = require("../../entities/product.entity");
const class_transformer_1 = require("class-transformer");
const category_repository_1 = require("../category/category.repository");
const product_detail_repository_1 = require("../product-detail/product-detail.repository");
let ProductService = class ProductService {
    constructor(repository, categoryRepository, productDetailRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
        this.productDetailRepository = productDetailRepository;
    }
    async getAllProduct() {
        const [products, totalCount] = await this.repository.getAllProduct();
        const productDtos = products.map(productDtoMap);
        return new product_dto_1.ProductResponse(productDtos, 1, 10000, totalCount);
    }
    async createProduct(params) {
        const { categoryId } = params, productParams = __rest(params, ["categoryId"]);
        if (!categoryId) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.CATEGORY_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const category = await this.categoryRepository.findOne({
            where: { id: categoryId },
        });
        if (!category) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.CATEGORY_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const productDb = (0, class_transformer_1.plainToInstance)(product_entity_1.ProductEntity, Object.assign(Object.assign({}, productParams), { category }));
        return this.repository.save(productDb);
    }
    async updateProduct(id, params) {
        const product = await this.repository.findOne({ where: { id } });
        const { categoryId } = params;
        const category = await this.categoryRepository.findOne({
            where: { id: categoryId },
        });
        if (category) {
            params['category'] = category;
        }
        if (!product) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.PRODUCT_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        const productData = (0, class_transformer_1.plainToInstance)(product_entity_1.ProductEntity, Object.assign(Object.assign({}, product), params));
        return this.repository.save(productData);
    }
    async getProductByCategoryIdAndProductName(query) {
        const { categoryId, productName } = query;
        if (!categoryId) {
            return new product_dto_1.ProductResponse([], 1, 10000, 0);
        }
        const [products, totalCount] = await this.repository.findAndCount({
            where: {
                title: (0, typeorm_1.ILike)(`%${productName || ''}%`),
                category: { id: +categoryId },
                isShow: true,
            },
            relations: ['category', 'productDetails'],
        });
        const productsDto = products.map(productDtoMap);
        return new product_dto_1.ProductResponse(productsDto, 1, 10000, totalCount);
    }
    async getProductById(id) {
        const product = await this.repository.getProductById(id);
        if (!product) {
            throw new common_1.HttpException(message_1.COMMON_MESSAGE.PRODUCT_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        }
        return product;
    }
    async exportProductDetail(id) {
        const data = await this.repository.findOne({
            where: { id: id, productDetails: { isShow: true, isSale: false } },
            relations: ['productDetails'],
            select: { productDetails: { info: true, id: true } },
        });
        return data.productDetails.map((z) => z.info);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        category_repository_1.CategoryRepository,
        product_detail_repository_1.ProductDetailRepository])
], ProductService);
function productDtoMap(z) {
    return {
        id: z.id,
        title: z.title,
        category: { id: z.category.id, title: z.category.title },
        productDetails: z.productDetails.filter((z) => !z.isSale && z.isShow).length,
        createdAt: z.createdAt,
        isShow: z.isShow,
        price: z.price,
        description: z.description,
        subDescription: z.subDescription,
        orderNumber: z.orderNumber,
        updatedAt: z.updatedAt,
    };
}
//# sourceMappingURL=product.service.js.map