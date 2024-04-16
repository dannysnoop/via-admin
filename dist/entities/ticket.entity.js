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
exports.TicketEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const constant_1 = require("../helper/constant");
const user_entity_1 = require("./user.entity");
let TicketEntity = class TicketEntity extends base_entity_1.BaseEntity {
};
exports.TicketEntity = TicketEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], TicketEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], TicketEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constant_1.TICKER_PRIORITY,
        default: constant_1.TICKER_PRIORITY.NORMAL,
    }),
    __metadata("design:type", Number)
], TicketEntity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constant_1.TICKER_STATUS,
        default: constant_1.TICKER_STATUS.NEW,
    }),
    __metadata("design:type", Number)
], TicketEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, (user) => user.tickets),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], TicketEntity.prototype, "users", void 0);
exports.TicketEntity = TicketEntity = __decorate([
    (0, typeorm_1.Entity)('tickets')
], TicketEntity);
//# sourceMappingURL=ticket.entity.js.map