import { ITransactionService } from './i.transaction.service';
import { CreateTransactionRequest, Pagination, TransactionDto, TransactionNewestDto, TransactionOrderQueryStatistic, TransactionOrderStatistic, TransactionQueryDate, TransactionRequest, TransactionResponse, TransactionStatistic, TransactionTop10 } from './DTO/transaction.dto';
import { TransactionRepository } from './transaction.repository';
import { UserDto } from '../user/DTO/user.dto';
import { IUserService } from '../user/i.user.service';
import { IConfigWebService } from '../config-web/i.config-web.service';
import { ChatWsGatewayService } from '../websocket/websocket.gateway';
export declare class TransactionService implements ITransactionService {
    private repository;
    private readonly IUserService;
    private readonly IConfigWebService;
    private readonly chatWsGatewayService;
    constructor(repository: TransactionRepository, IUserService: IUserService, IConfigWebService: IConfigWebService, chatWsGatewayService: ChatWsGatewayService);
    autoCreateTransaction(secretCode?: string, amount?: number, depositBank?: number): Promise<TransactionDto>;
    getNewTransaction(): Promise<TransactionNewestDto[]>;
    getUserSelfDeposit(userAdmin: UserDto): Promise<TransactionResponse>;
    getStatisticsForAdmin(query: TransactionQueryDate): Promise<TransactionOrderStatistic | TransactionOrderQueryStatistic>;
    getTransactionByUsernameOrCode(params: TransactionRequest): Promise<TransactionResponse>;
    createTransaction(userAdmin: UserDto, params: CreateTransactionRequest): Promise<TransactionDto>;
    getTop10InMonth(): Promise<TransactionTop10[]>;
    getStatistics(): Promise<TransactionStatistic>;
    getTransactionByUser(userAdmin: UserDto, pagination: Pagination): Promise<TransactionResponse>;
}
