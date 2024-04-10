import { TransactionsEntity } from '../../../entities/transactions.entity';
import { UserResponse } from '../../user/DTO/user.dto';
import { DEPOSIT } from "../../../helper/constant";
export declare class TransactionDto extends TransactionsEntity {
}
export declare class TransactionNewestDto {
    amount: number;
    description: string;
    username: string;
    code: string;
    depositType: DEPOSIT;
    createdAt: string;
}
export declare class TransactionResponse extends UserResponse<TransactionDto> {
}
export declare class TransactionRequest {
    code: string;
    username: string;
    take: number;
    page: number;
}
export declare class Pagination {
    take: number;
    page: number;
}
export declare class CreateTransactionRequest {
    amount: number;
    description: string;
    code: string;
    adminNameHandle: string;
    userId: number;
    type: DEPOSIT;
}
export declare class TransactionTop10 {
    total: number;
    username: string;
}
export declare class TransactionQueryDate {
    startDate: string;
    endDate: string;
}
export declare class TransactionStatistic {
    totalAmountYesterday: number;
    totalAmountToday: number;
    totalAmountThisWeek: number;
    totalAmountThisMonth: number;
    totalOrderYesterday: number;
    totalOrderAmountYesterday: number;
    totalOrderToday: number;
    totalOrderAmountToday: number;
    totalOrderThisWeek: number;
    totalOrderAmountThisWeek: number;
    totalOrderThisMonth: number;
    totalOrderAmountThisMonth: number;
}
export declare class TransactionOrderStatistic {
    totalAmountDepositWeek: number;
    totalAmountDepositMonth: number;
    totalAmountDepositYear: number;
    totalAmountWithdrawWeek: number;
    totalAmountWithdrawMonth: number;
    totalAmountWithdrawYear: number;
}
export declare class TransactionOrderQueryStatistic {
    totalAmountDeposit: number;
    totalAmountWithdraw: number;
}
