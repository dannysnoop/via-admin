import { DataSource, Repository } from 'typeorm';
import { TransactionsEntity } from '../../entities/transactions.entity';
export declare class TransactionRepository extends Repository<TransactionsEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
