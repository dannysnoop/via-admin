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
exports.BaseEntity = void 0;
const typeorm_1 = require("typeorm");
class BaseEntity {
    updateTimestampsOnCreate() {
        const currentTimestamp = Math.floor(new Date().getTime() / 1000);
        this.createdAt = currentTimestamp.toString();
        this.updatedAt = currentTimestamp.toString();
    }
    updateTimestampOnUpdate() {
        this.updatedAt = Math.floor(new Date().getTime() / 1000).toString();
    }
}
exports.BaseEntity = BaseEntity;
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'varchar', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'varchar', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseEntity.prototype, "updateTimestampsOnCreate", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseEntity.prototype, "updateTimestampOnUpdate", null);
//# sourceMappingURL=base.entity.js.map