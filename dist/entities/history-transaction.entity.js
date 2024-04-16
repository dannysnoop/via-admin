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
exports.HistoryTransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const product_entity_1 = require("./product.entity");
let HistoryTransactionEntity = class HistoryTransactionEntity extends base_entity_1.BaseEntity {
};
exports.HistoryTransactionEntity = HistoryTransactionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], HistoryTransactionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HistoryTransactionEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.historyTransactions),
    __metadata("design:type", product_entity_1.ProductEntity)
], HistoryTransactionEntity.prototype, "product", void 0);
exports.HistoryTransactionEntity = HistoryTransactionEntity = __decorate([
    (0, typeorm_1.Entity)('history-transaction')
], HistoryTransactionEntity);
//# sourceMappingURL=history-transaction.entity.js.map