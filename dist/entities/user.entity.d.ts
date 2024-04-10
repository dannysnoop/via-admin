import { BaseEntity } from './base.entity';
import { ROLE } from '../helper/constant';
import { TransactionsEntity } from './transactions.entity';
import { OrderEntity } from './order.entity';
import { TicketEntity } from './ticket.entity';
export declare class UserEntity extends BaseEntity {
    id: number;
    email: string;
    username: string;
    phone: string;
    password: string;
    balance: number;
    is2FA: boolean;
    OTP: string;
    role: ROLE;
    device: string;
    lastLogin: Date;
    ip: string;
    totalBalance: number;
    isActive: boolean;
    discount: number;
    secretCodeTransfer: string;
    transactions: TransactionsEntity[];
    orders: OrderEntity[];
    tickets: TicketEntity[];
}
