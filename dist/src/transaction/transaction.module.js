"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_controller_1 = require("./transaction.controller");
const transaction_service_1 = require("./transaction.service");
const transaction_repository_1 = require("./transaction.repository");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const config_web_module_1 = require("../config-web/config-web.module");
const config_web_service_1 = require("../config-web/config-web.service");
const websocket_gateway_1 = require("../websocket/websocket.gateway");
let TransactionModule = class TransactionModule {
};
exports.TransactionModule = TransactionModule;
exports.TransactionModule = TransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => user_module_1.UserModule), (0, common_1.forwardRef)(() => config_web_module_1.ConfigWebModule)],
        controllers: [transaction_controller_1.TransactionController],
        providers: [
            transaction_service_1.TransactionService,
            transaction_repository_1.TransactionRepository,
            { provide: 'IUserService', useClass: user_service_1.UserService },
            { provide: 'IConfigWebService', useClass: config_web_service_1.ConfigWebService },
            { provide: 'ITransactionService', useClass: transaction_service_1.TransactionService },
            websocket_gateway_1.ChatWsGatewayService
        ],
        exports: [transaction_service_1.TransactionService, transaction_repository_1.TransactionRepository],
    })
], TransactionModule);
//# sourceMappingURL=transaction.module.js.map