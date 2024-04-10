"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const product_repository_1 = require("./product.repository");
const category_module_1 = require("../category/category.module");
const category_service_1 = require("../category/category.service");
const product_detail_module_1 = require("../product-detail/product-detail.module");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => category_module_1.CategoryModule),
            (0, common_1.forwardRef)(() => product_detail_module_1.ProductDetailModule),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [
            product_service_1.ProductService,
            product_repository_1.ProductRepository,
            { provide: 'IProductService', useClass: product_service_1.ProductService },
            { provide: 'ICategoryService', useClass: category_service_1.CategoryService },
        ],
        exports: [product_service_1.ProductService, product_repository_1.ProductRepository],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map