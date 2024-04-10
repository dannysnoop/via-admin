import { BaseEntity } from './base.entity';
import { TICKER_PRIORITY, TICKER_STATUS } from '../helper/constant';
import { UserEntity } from './user.entity';
export declare class TicketEntity extends BaseEntity {
    id: number;
    title: string;
    priority: TICKER_PRIORITY;
    status: TICKER_STATUS;
    users: UserEntity[];
}
