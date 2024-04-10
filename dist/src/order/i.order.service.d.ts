import { UserDto } from '../user/DTO/user.dto';
import { OrderCreateRequest, OrderDto, OrderQueryRequest, OrderResponse } from './DTO/order.dto';
import { OrderEntity } from "../../entities/order.entity";
import { Pagination } from "../transaction/DTO/transaction.dto";
export interface IOrderService {
    getAllOrder(query: OrderQueryRequest): Promise<OrderResponse>;
    getUserOrder(user: UserDto, query: Pagination): Promise<OrderResponse>;
    createOrder(user: UserDto, params: OrderCreateRequest): Promise<OrderEntity>;
    getDetailOder(orderId: number): Promise<OrderDto>;
    downloadDetailOrder(orderId: number): Promise<string>;
    getTopNewOrder(): Promise<OrderDto[]>;
}
