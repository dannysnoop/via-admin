import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { DEPOSIT } from "../helper/constant";
export declare class TransactionsEntity extends BaseEntity {
    id: string;
    amount: number;
    description: string;
    code: string;
    type: DEPOSIT;
    adminNameHandle: string;
    user: UserEntity;
    beforeInsert(): void;
}
