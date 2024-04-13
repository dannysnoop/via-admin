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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transaction_dto_1 = require("./DTO/transaction.dto");
const message_1 = require("../../helper/message");
const user_decorator_1 = require("../../decorator/user.decorator");
const user_dto_1 = require("../user/DTO/user.dto");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const roles_decorator_1 = require("../../decorator/roles.decorator");
const constant_1 = require("../../helper/constant");
const mail_bank_listen_1 = require("../../utility/mail-bank-listen");
const check_live_uid_1 = require("../../utility/check-live-uid");
let TransactionController = class TransactionController {
    constructor(ITransactionService, IConfigWebService) {
        this.ITransactionService = ITransactionService;
        this.IConfigWebService = IConfigWebService;
    }
    async onModuleInit() {
        const { ACB_AccountPass, adminEmail, SyntaxTransfer } = await this.IConfigWebService.getConfig();
        const a = await (0, check_live_uid_1.checkUserActiveStatus)(100040774575842);
        console.log(a);
        (0, mail_bank_listen_1.emailAndPasswordImap)({ user: adminEmail, password: ACB_AccountPass }, this.ITransactionService, SyntaxTransfer);
    }
    async getTransactionByUserNameAndCode(query) {
        return this.ITransactionService.getTransactionByUsernameOrCode(query);
    }
    async createTransaction(user, params) {
        return this.ITransactionService.createTransaction(user, params);
    }
    async getTop10Deposit() {
        return this.ITransactionService.getTop10InMonth();
    }
    async getNewestDeposit() {
        return this.ITransactionService.getNewTransaction();
    }
    async getUserDeposit(user, pagination) {
        return this.ITransactionService.getTransactionByUser(user, pagination);
    }
    async getUserSelfDeposit(user) {
        return this.ITransactionService.getUserSelfDeposit(user);
    }
    async getStatistics() {
        return this.ITransactionService.getStatistics();
    }
    async getAdminStatistics(query) {
        return this.ITransactionService.getStatisticsForAdmin(query);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'username', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'code', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.TransactionRequest]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getTransactionByUserNameAndCode", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: message_1.COMMON_MESSAGE.CREATED,
    }),
    (0, swagger_1.ApiBody)({ type: transaction_dto_1.CreateTransactionRequest }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(constant_1.ROLE.ADMIN),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto,
        transaction_dto_1.CreateTransactionRequest]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.Get)('/get-top-10-deposit'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getTop10Deposit", null);
__decorate([
    (0, common_1.Get)('/get-newest-deposit'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getNewestDeposit", null);
__decorate([
    (0, common_1.Get)('/user-deposit'),
    (0, swagger_1.ApiQuery)({ name: 'take', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto,
        transaction_dto_1.TransactionRequest]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getUserDeposit", null);
__decorate([
    (0, common_1.Get)('/user-self-deposit'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getUserSelfDeposit", null);
__decorate([
    (0, common_1.Get)('/statistics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)('/statistics-admin'),
    (0, swagger_1.ApiQuery)({ name: 'startDate', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'endDate', required: false, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.TransactionQueryDate]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAdminStatistics", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.Controller)('api/transaction'),
    (0, swagger_1.ApiTags)('transaction'),
    __param(0, (0, common_1.Inject)('ITransactionService')),
    __param(1, (0, common_1.Inject)('IConfigWebService')),
    __metadata("design:paramtypes", [Object, Object])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map