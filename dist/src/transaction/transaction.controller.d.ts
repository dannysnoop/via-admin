import { OnModuleInit } from '@nestjs/common';
import { ITransactionService } from './i.transaction.service';
import { CreateTransactionRequest, TransactionQueryDate, TransactionRequest } from './DTO/transaction.dto';
import { UserDto } from '../user/DTO/user.dto';
import { IConfigWebService } from '../config-web/i.config-web.service';
export declare class TransactionController implements OnModuleInit {
    private readonly ITransactionService;
    private readonly IConfigWebService;
    constructor(ITransactionService: ITransactionService, IConfigWebService: IConfigWebService);
    onModuleInit(): Promise<void>;
    getTransactionByUserNameAndCode(query: TransactionRequest): Promise<import("./DTO/transaction.dto").TransactionResponse>;
    createTransaction(user: UserDto, params: CreateTransactionRequest): Promise<import("./DTO/transaction.dto").TransactionDto>;
    getTop10Deposit(): Promise<import("./DTO/transaction.dto").TransactionTop10[]>;
    getNewestDeposit(): Promise<import("./DTO/transaction.dto").TransactionNewestDto[]>;
    getUserDeposit(user: UserDto, pagination: TransactionRequest): Promise<import("./DTO/transaction.dto").TransactionResponse>;
    getUserSelfDeposit(user: UserDto): Promise<import("./DTO/transaction.dto").TransactionResponse>;
    getStatistics(): Promise<import("./DTO/transaction.dto").TransactionStatistic>;
    getAdminStatistics(query: TransactionQueryDate): Promise<import("./DTO/transaction.dto").TransactionOrderStatistic | import("./DTO/transaction.dto").TransactionOrderQueryStatistic>;
}
