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
exports.TransactionOrderQueryStatistic = exports.TransactionOrderStatistic = exports.TransactionStatistic = exports.TransactionQueryDate = exports.TransactionTop10 = exports.CreateTransactionRequest = exports.Pagination = exports.TransactionRequest = exports.TransactionResponse = exports.TransactionNewestDto = exports.TransactionDto = void 0;
const transactions_entity_1 = require("../../../entities/transactions.entity");
const user_dto_1 = require("../../user/DTO/user.dto");
const swagger_1 = require("@nestjs/swagger");
const constant_1 = require("../../../helper/constant");
class TransactionDto extends transactions_entity_1.TransactionsEntity {
}
exports.TransactionDto = TransactionDto;
class TransactionNewestDto {
    constructor() {
        this.amount = 0;
        this.description = '';
        this.username = '';
        this.code = '';
        this.depositType = constant_1.DEPOSIT.DEFAULT;
        this.createdAt = '';
    }
}
exports.TransactionNewestDto = TransactionNewestDto;
class TransactionResponse extends user_dto_1.UserResponse {
}
exports.TransactionResponse = TransactionResponse;
class TransactionRequest {
    constructor() {
        this.take = 10;
        this.page = 1;
    }
}
exports.TransactionRequest = TransactionRequest;
class Pagination {
    constructor() {
        this.take = 10;
        this.page = 1;
    }
}
exports.Pagination = Pagination;
class CreateTransactionRequest {
}
exports.CreateTransactionRequest = CreateTransactionRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateTransactionRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTransactionRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTransactionRequest.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTransactionRequest.prototype, "adminNameHandle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateTransactionRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateTransactionRequest.prototype, "type", void 0);
class TransactionTop10 {
    constructor() {
        this.total = 0;
        this.username = '';
    }
}
exports.TransactionTop10 = TransactionTop10;
class TransactionQueryDate {
}
exports.TransactionQueryDate = TransactionQueryDate;
class TransactionStatistic {
    constructor() {
        this.totalAmountYesterday = 0;
        this.totalAmountToday = 0;
        this.totalAmountThisWeek = 0;
        this.totalAmountThisMonth = 0;
        this.totalOrderYesterday = 0;
        this.totalOrderAmountYesterday = 0;
        this.totalOrderToday = 0;
        this.totalOrderAmountToday = 0;
        this.totalOrderThisWeek = 0;
        this.totalOrderAmountThisWeek = 0;
        this.totalOrderThisMonth = 0;
        this.totalOrderAmountThisMonth = 0;
    }
}
exports.TransactionStatistic = TransactionStatistic;
class TransactionOrderStatistic {
    constructor() {
        this.totalAmountDepositWeek = 0;
        this.totalAmountDepositMonth = 0;
        this.totalAmountDepositYear = 0;
        this.totalAmountWithdrawWeek = 0;
        this.totalAmountWithdrawMonth = 0;
        this.totalAmountWithdrawYear = 0;
    }
}
exports.TransactionOrderStatistic = TransactionOrderStatistic;
class TransactionOrderQueryStatistic {
    constructor() {
        this.totalAmountDeposit = 0;
        this.totalAmountWithdraw = 0;
    }
}
exports.TransactionOrderQueryStatistic = TransactionOrderQueryStatistic;
//# sourceMappingURL=transaction.dto.js.map