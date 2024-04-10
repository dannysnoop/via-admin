"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_repository_1 = require("./order.repository");
const product_module_1 = require("../product/product.module");
const product_service_1 = require("../product/product.service");
const category_module_1 = require("../category/category.module");
const product_detail_module_1 = require("../product-detail/product-detail.module");
const product_detail_service_1 = require("../product-detail/product-detail.service");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const config_web_module_1 = require("../config-web/config-web.module");
const config_web_service_1 = require("../config-web/config-web.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const typeorm_1 = require("@nestjs/typeorm");
const history_transaction_entity_1 = require("../../entities/history-transaction.entity");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => product_module_1.ProductModule),
            (0, common_1.forwardRef)(() => category_module_1.CategoryModule),
            (0, common_1.forwardRef)(() => product_detail_module_1.ProductDetailModule),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            (0, common_1.forwardRef)(() => config_web_module_1.ConfigWebModule),
            cache_manager_1.CacheModule.register(),
            typeorm_1.TypeOrmModule.forFeature([history_transaction_entity_1.HistoryTransactionEntity]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [
            order_service_1.OrderService,
            order_repository_1.OrderRepository,
            { provide: 'IOrderService', useClass: order_service_1.OrderService },
            { provide: 'IProductService', useClass: product_service_1.ProductService },
            { provide: 'IProductDetailService', useClass: product_detail_service_1.ProductDetailService },
            { provide: 'IUserService', useClass: user_service_1.UserService },
            { provide: 'IConfigWebService', useClass: config_web_service_1.ConfigWebService },
        ],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map