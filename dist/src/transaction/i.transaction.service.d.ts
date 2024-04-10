import { CreateTransactionRequest, Pagination, TransactionDto, TransactionNewestDto, TransactionOrderQueryStatistic, TransactionOrderStatistic, TransactionQueryDate, TransactionRequest, TransactionResponse, TransactionStatistic, TransactionTop10 } from './DTO/transaction.dto';
import { UserDto } from '../user/DTO/user.dto';
export interface ITransactionService {
    getTransactionByUsernameOrCode(params: TransactionRequest): Promise<TransactionResponse>;
    createTransaction(userAdmin: UserDto, params: CreateTransactionRequest): Promise<TransactionDto>;
    getTop10InMonth(): Promise<TransactionTop10[]>;
    getStatistics(): Promise<TransactionStatistic>;
    getTransactionByUser(userAdmin: UserDto, pagination: Pagination): Promise<TransactionResponse>;
    getUserSelfDeposit(userAdmin: UserDto): Promise<TransactionResponse>;
    getStatisticsForAdmin(query: TransactionQueryDate): Promise<TransactionOrderStatistic | TransactionOrderQueryStatistic>;
    getNewTransaction(): Promise<TransactionNewestDto[]>;
    autoCreateTransaction(secretCode: string, amount: number, depositBank: number): Promise<TransactionDto>;
}
