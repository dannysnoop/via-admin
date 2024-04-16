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
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const categories_entity_1 = require("./categories.entity");
const order_entity_1 = require("./order.entity");
const product_detail_entity_1 = require("./product-detail.entity");
const history_transaction_entity_1 = require("./history-transaction.entity");
let ProductEntity = class ProductEntity extends base_entity_1.BaseEntity {
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "holdSale", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "quantityLimit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "subDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "orderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "isShow", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.CategoriesEntity, (category) => category.products),
    __metadata("design:type", categories_entity_1.CategoriesEntity)
], ProductEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (order) => order.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_transaction_entity_1.HistoryTransactionEntity, (history) => history.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "historyTransactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_detail_entity_1.ProductDetailEntity, (productDetail) => productDetail.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "productDetails", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductEntity);
//# sourceMappingURL=product.entity.js.map