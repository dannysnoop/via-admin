"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigWebModule = void 0;
const common_1 = require("@nestjs/common");
const config_web_controller_1 = require("./config-web.controller");
const config_web_service_1 = require("./config-web.service");
const config_web_repository_1 = require("./config-web.repository");
let ConfigWebModule = class ConfigWebModule {
};
exports.ConfigWebModule = ConfigWebModule;
exports.ConfigWebModule = ConfigWebModule = __decorate([
    (0, common_1.Module)({
        controllers: [config_web_controller_1.ConfigWebController],
        providers: [
            config_web_service_1.ConfigWebService,
            config_web_repository_1.ConfigWebRepository,
            { provide: 'IConfigWebService', useClass: config_web_service_1.ConfigWebService },
        ],
        exports: [config_web_service_1.ConfigWebService, config_web_repository_1.ConfigWebRepository],
    })
], ConfigWebModule);
//# sourceMappingURL=config-web.module.js.map