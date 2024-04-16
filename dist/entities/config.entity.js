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
exports.ConfigEntity = void 0;
const typeorm_1 = require("typeorm");
const constant_1 = require("../helper/constant");
let ConfigEntity = class ConfigEntity {
};
exports.ConfigEntity = ConfigEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "interfaceType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constant_1.SHOW_PRODUCT_TYPE,
        default: constant_1.SHOW_PRODUCT_TYPE.DEFAULT,
    }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "showProductType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constant_1.ALERT_CONFIG,
        default: constant_1.ALERT_CONFIG.TOP_MAIN,
    }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "alertType", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ConfigEntity.prototype, "isShowHistoryBuySell", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ConfigEntity.prototype, "isShowRecap", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ConfigEntity.prototype, "loginGoogle", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ConfigEntity.prototype, "loginTelegram", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "limitIpOnDomain", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "timeCloseAlert", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "favicon", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "nameWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "titleWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "descriptionWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "adminEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "affiliate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "promotionNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "minBalanceToTakePromotion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ConfigEntity.prototype, "isShowACB", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "ACB_AccountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "ACB_AccountName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "ACB_AccountNameApp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "ACB_AccountPass", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "SyntaxTransfer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "zaloSupportPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "AlertLineRunning", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "AlertTopPage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "TokenBM", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "warrantyPolicy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "warrantyDenied", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "contentTXTDownload", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "GoogleAnalyticsCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "linkImageBank", void 0);
exports.ConfigEntity = ConfigEntity = __decorate([
    (0, typeorm_1.Entity)('config')
], ConfigEntity);
//# sourceMappingURL=config.entity.js.map