"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailModule = void 0;
const common_1 = require("@nestjs/common");
const product_detail_controller_1 = require("./product-detail.controller");
const product_detail_service_1 = require("./product-detail.service");
const product_detail_repository_1 = require("./product-detail.repository");
const product_module_1 = require("../product/product.module");
const product_service_1 = require("../product/product.service");
const category_module_1 = require("../category/category.module");
const typeorm_1 = require("@nestjs/typeorm");
const history_transaction_entity_1 = require("../../entities/history-transaction.entity");
let ProductDetailModule = class ProductDetailModule {
};
exports.ProductDetailModule = ProductDetailModule;
exports.ProductDetailModule = ProductDetailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => product_module_1.ProductModule),
            (0, common_1.forwardRef)(() => category_module_1.CategoryModule),
            typeorm_1.TypeOrmModule.forFeature([history_transaction_entity_1.HistoryTransactionEntity]),
        ],
        controllers: [product_detail_controller_1.ProductDetailController],
        providers: [
            product_detail_service_1.ProductDetailService,
            product_detail_repository_1.ProductDetailRepository,
            { provide: 'IProductDetailService', useClass: product_detail_service_1.ProductDetailService },
            { provide: 'IProductService', useClass: product_service_1.ProductService },
        ],
        exports: [product_detail_service_1.ProductDetailService, product_detail_repository_1.ProductDetailRepository],
    })
], ProductDetailModule);
//# sourceMappingURL=product-detail.module.js.map