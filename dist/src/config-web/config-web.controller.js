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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigWebController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const message_1 = require("../../helper/message");
const config_web_dto_1 = require("./DTO/config-web.dto");
let ConfigWebController = class ConfigWebController {
    constructor(IConfigWebService) {
        this.IConfigWebService = IConfigWebService;
    }
    getConfigWeb() {
        return this.IConfigWebService.getConfig();
    }
    updateConfigWeb(params) {
        return this.IConfigWebService.updateConfig(params);
    }
};
exports.ConfigWebController = ConfigWebController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigWebController.prototype, "getConfigWeb", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
    }),
    (0, swagger_1.ApiBody)({ type: config_web_dto_1.ConfigWebDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [config_web_dto_1.ConfigWebDto]),
    __metadata("design:returntype", void 0)
], ConfigWebController.prototype, "updateConfigWeb", null);
exports.ConfigWebController = ConfigWebController = __decorate([
    (0, common_1.Controller)('api/config-web'),
    (0, swagger_1.ApiTags)('config-web'),
    __param(0, (0, common_1.Inject)('IConfigWebService')),
    __metadata("design:paramtypes", [Object])
], ConfigWebController);
//# sourceMappingURL=config-web.controller.js.map