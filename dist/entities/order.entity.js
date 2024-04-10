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
exports.OrderEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
const constant_1 = require("../helper/constant");
const product_entity_1 = require("./product.entity");
const product_detail_entity_1 = require("./product-detail.entity");
let OrderEntity = class OrderEntity extends base_entity_1.BaseEntity {
};
exports.OrderEntity = OrderEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.orders),
    __metadata("design:type", product_entity_1.ProductEntity)
], OrderEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_detail_entity_1.ProductDetailEntity, (productDetail) => productDetail.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "productDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constant_1.ORDER_STATUS,
        default: constant_1.ORDER_STATUS.SUCCESS,
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.orders),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderEntity.prototype, "user", void 0);
exports.OrderEntity = OrderEntity = __decorate([
    (0, typeorm_1.Entity)('orders')
], OrderEntity);
//# sourceMappingURL=order.entity.js.map