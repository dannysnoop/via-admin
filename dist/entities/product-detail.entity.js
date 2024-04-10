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
exports.ProductDetailEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const product_entity_1 = require("./product.entity");
const order_entity_1 = require("./order.entity");
let ProductDetailEntity = class ProductDetailEntity extends base_entity_1.BaseEntity {
    async beforeUpdate() {
        this.uid = this.info.split('|')[0];
    }
};
exports.ProductDetailEntity = ProductDetailEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductDetailEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.productDetails),
    __metadata("design:type", product_entity_1.ProductEntity)
], ProductDetailEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.OrderEntity, (order) => order.productDetails),
    __metadata("design:type", order_entity_1.OrderEntity)
], ProductDetailEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductDetailEntity.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProductDetailEntity.prototype, "isShow", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductDetailEntity.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProductDetailEntity.prototype, "isSale", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductDetailEntity.prototype, "beforeUpdate", null);
exports.ProductDetailEntity = ProductDetailEntity = __decorate([
    (0, typeorm_1.Entity)('product_details')
], ProductDetailEntity);
//# sourceMappingURL=product-detail.entity.js.map