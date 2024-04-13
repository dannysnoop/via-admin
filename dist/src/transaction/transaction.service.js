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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const transaction_dto_1 = require("./DTO/transaction.dto");
const transaction_repository_1 = require("./transaction.repository");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const transactions_entity_1 = require("../../entities/transactions.entity");
const user_entity_1 = require("../../entities/user.entity");
const moment = require("moment");
const constant_1 = require("../../helper/constant");
const websocket_gateway_1 = require("../websocket/websocket.gateway");
const today = moment();
let TransactionService = class TransactionService {
    constructor(repository, IUserService, IConfigWebService, chatWsGatewayService) {
        this.repository = repository;
        this.IUserService = IUserService;
        this.IConfigWebService = IConfigWebService;
        this.chatWsGatewayService = chatWsGatewayService;
    }
    async autoCreateTransaction(secretCode = '', amount = 0, depositBank = 3) {
        try {
            const user = await this.IUserService.searchUserBySecretCode(secretCode);
            if (!user) {
                return;
            }
            const { secretCodeTransfer } = user;
            if (secretCode === secretCodeTransfer) {
                await this.IUserService.addBalanceForUser(user, amount);
                const transaction = new transactions_entity_1.TransactionsEntity();
                transaction.user = user;
                transaction.type = constant_1.DEPOSIT.VP;
                transaction.amount = amount;
                transaction.description = user.username + ' Tự nạp tiền';
                transaction.code =
                    'VP ' + `${Math.floor(Math.random() * 1000000000) + 1}`;
                this.chatWsGatewayService.autoSendAmountToClient(amount, user.id);
                return this.repository.save(transaction);
            }
            return null;
        }
        catch (e) {
            console.warn(e);
        }
    }
    async getNewTransaction() {
        const transactionNewest = await this.repository.find({
            select: { user: { username: true, id: true } },
            relations: ['user'],
            order: { id: 'DESC' },
            take: 13,
        });
        return transactionNewest.map(transactionNewestMap);
    }
    async getUserSelfDeposit(userAdmin) {
        const { id } = userAdmin;
        const startOfMonth = today.startOf('month').unix();
        const endOfMonth = today.endOf('month').unix();
        const [data, totalCount] = await this.repository.findAndCount({
            where: {
                user: { id },
                createdAt: (0, typeorm_1.Between)(startOfMonth.toString(), endOfMonth.toString()),
            },
            select: { user: { username: true, id: true } },
            relations: ['user'],
            order: { id: 'DESC' },
        });
        return new transaction_dto_1.TransactionResponse(data, 1, 100000, totalCount);
    }
    async getStatisticsForAdmin(query) {
        const { startDate, endDate } = query;
        if (!startDate && !endDate) {
            const data = await this.repository.query(`

 SELECT   sum(amount) as total
 FROM transactions a
 WHERE EXTRACT(WEEK FROM TO_TIMESTAMP(cast(a."createdAt" as bigint))) = EXTRACT(WEEK FROM CURRENT_DATE)
 union all

 SELECT  sum(amount) as total
 FROM transactions a
 WHERE DATE_PART('month', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('month', CURRENT_DATE)
 AND DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE) union all

 SELECT  sum(amount) as total
 FROM transactions a
 WHERE   DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE) union all

SELECT   sum(a."totalPrice") as total
 FROM orders a
  WHERE DATE_PART('month', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('month', CURRENT_DATE)
 AND DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE)
 union all


  SELECT   sum(a."totalPrice") as total
 FROM orders a
 WHERE EXTRACT(WEEK FROM TO_TIMESTAMP(cast(a."createdAt" as bigint))) = EXTRACT(WEEK FROM CURRENT_DATE)
 union all

 SELECT   sum(a."totalPrice") as total
 FROM orders a
  WHERE  DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE)`);
            return {
                totalAmountDepositWeek: data[0].total,
                totalAmountDepositMonth: data[1].total,
                totalAmountDepositYear: data[2].total,
                totalAmountWithdrawWeek: data[3].total,
                totalAmountWithdrawMonth: data[4].total,
                totalAmountWithdrawYear: data[5].total,
            };
        }
        const data = await this.repository.query(` SELECT   sum(amount) as total
 FROM transactions a
 WHERE TO_TIMESTAMP(cast(a."createdAt" as bigint)) between to_timestamp(${startDate}) and to_timestamp(${endDate})
 union all
 SELECT   sum(a."totalPrice") as total
 FROM orders a
  WHERE TO_TIMESTAMP(cast(a."createdAt" as bigint)) between to_timestamp(${startDate}) and to_timestamp(${endDate})`);
        return {
            totalAmountDeposit: data[0].total || 0,
            totalAmountWithdraw: data[1].total,
        };
    }
    async getTransactionByUsernameOrCode(params) {
        const { username, take = 10, page = 1, code } = params;
        const skip = (page - 1) * take || 0;
        const [data, totalCount] = await this.repository.findAndCount({
            where: {
                code: (0, typeorm_1.ILike)(`%${code || ''}%`),
                user: { username: (0, typeorm_1.ILike)(`%${username || ''}%`) },
            },
            select: { user: { username: true, id: true } },
            relations: ['user'],
            take,
            skip,
            order: { id: 'desc' },
        });
        return new transaction_dto_1.TransactionResponse(data, page, take, totalCount);
    }
    async createTransaction(userAdmin, params) {
        const { userId } = params, paramsTransaction = __rest(params, ["userId"]);
        const user = await this.IUserService.getUserById(userId);
        paramsTransaction.adminNameHandle = userAdmin.username;
        const userEntity = (0, class_transformer_1.plainToInstance)(user_entity_1.UserEntity, user);
        await this.IUserService.addBalanceForUser(userEntity, paramsTransaction.amount);
        const transactionSave = (0, class_transformer_1.plainToInstance)(transactions_entity_1.TransactionsEntity, Object.assign(Object.assign({}, paramsTransaction), { user: userEntity }));
        return await this.repository.save(transactionSave);
    }
    async getTop10InMonth() {
        return this.repository.query(`
select total, username from (SELECT  sum(amount) as total, "userId"
FROM transactions a
WHERE DATE_PART('month', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('month', CURRENT_DATE)
AND DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE) group by "userId" order by total desc limit  10) as t inner join users u on t."userId" = u.id order by total DESC;`);
    }
    async getStatistics() {
        const data = await this.repository.query(` SELECT  sum(amount) as total
 FROM transactions a
 WHERE DATE(TO_TIMESTAMP(cast(a."createdAt" as bigint))) = CURRENT_DATE - INTERVAL '1 day'
 union all
 SELECT  sum(amount) as total
 FROM transactions a
 WHERE DATE(TO_TIMESTAMP(cast(a."createdAt" as bigint))) = CURRENT_DATE
 union all

 SELECT   sum(amount) as total
 FROM transactions a
 WHERE EXTRACT(WEEK FROM TO_TIMESTAMP(cast(a."createdAt" as bigint))) = EXTRACT(WEEK FROM CURRENT_DATE)
 union all

 SELECT  sum(amount) as total
 FROM transactions a
 WHERE DATE_PART('month', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('month', CURRENT_DATE)
 AND DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE) union all
select count(*) from orders  a  WHERE DATE(TO_TIMESTAMP(cast(a."createdAt" as bigint))) = CURRENT_DATE - INTERVAL '1 day' union all
select count(*) from orders  a  WHERE DATE(TO_TIMESTAMP(cast(a."createdAt" as bigint))) = CURRENT_DATE  union all
select count(*) from orders  a  WHERE EXTRACT(WEEK FROM TO_TIMESTAMP(cast(a."createdAt" as bigint))) = EXTRACT(WEEK FROM CURRENT_DATE)  union all
select count(*) from orders  a   WHERE DATE_PART('month', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('month', CURRENT_DATE)
 AND DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE)  union all
select sum(a."totalPrice") from orders  a  WHERE DATE(TO_TIMESTAMP(cast(a."createdAt" as bigint))) = CURRENT_DATE - INTERVAL '1 day'  union all
select sum(a."totalPrice") from orders  a  WHERE DATE(TO_TIMESTAMP(cast(a."createdAt" as bigint))) = CURRENT_DATE  union all
select sum(a."totalPrice") from orders  a  WHERE EXTRACT(WEEK FROM TO_TIMESTAMP(cast(a."createdAt" as bigint))) = EXTRACT(WEEK FROM CURRENT_DATE)  union all
select sum(a."totalPrice") from orders  a  WHERE DATE_PART('month', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('month', CURRENT_DATE)
 AND DATE_PART('year', TO_TIMESTAMP(cast(a."createdAt" as bigint))) = DATE_PART('year', CURRENT_DATE);`);
        return {
            totalAmountYesterday: data[0].total || 0,
            totalAmountToday: data[1].total || 0,
            totalAmountThisWeek: data[2].total || 0,
            totalAmountThisMonth: data[3].total || 0,
            totalOrderYesterday: data[4].total || 0,
            totalOrderToday: data[5].total || 0,
            totalOrderThisWeek: data[6].total || 0,
            totalOrderThisMonth: data[7].total || 0,
            totalOrderAmountYesterday: data[8].total || 0,
            totalOrderAmountToday: data[9].total || 0,
            totalOrderAmountThisWeek: data[10].total || 0,
            totalOrderAmountThisMonth: data[11].total || 0,
        };
    }
    async getTransactionByUser(userAdmin, pagination) {
        const { take, page } = pagination;
        const skip = (page - 1) * take || 0;
        const [data, totalCount] = await this.repository.findAndCount({
            where: { user: { id: userAdmin.id } },
            skip,
            take,
            order: { id: 'DESC' },
        });
        return new transaction_dto_1.TransactionResponse(data, page, take, totalCount);
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('IUserService')),
    __param(2, (0, common_1.Inject)('IConfigWebService')),
    __metadata("design:paramtypes", [transaction_repository_1.TransactionRepository, Object, Object, websocket_gateway_1.ChatWsGatewayService])
], TransactionService);
function transactionNewestMap(item) {
    return {
        code: item.code,
        amount: item.amount,
        createdAt: item.createdAt,
        description: item.description,
        username: item.user.username,
        depositType: item.type,
    };
}
//# sourceMappingURL=transaction.service.js.map