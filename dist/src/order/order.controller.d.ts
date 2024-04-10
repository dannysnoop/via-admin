import { IOrderService } from './i.order.service';
import { Pagination } from "../transaction/DTO/transaction.dto";
import { OrderCreateRequest, OrderQueryRequest } from './DTO/order.dto';
import { UserDto } from '../user/DTO/user.dto';
export declare class OrderController {
    private readonly IOrderService;
    constructor(IOrderService: IOrderService);
    createOrder(user: UserDto, params: OrderCreateRequest): Promise<import("../../entities/order.entity").OrderEntity>;
    getUserOrderNew(user: UserDto): Promise<import("./DTO/order.dto").OrderDto[]>;
    getUserOrder(user: UserDto, query: Pagination): Promise<import("./DTO/order.dto").OrderResponse>;
    downloadOrder(id: number, res: any): Promise<void>;
    getDetailOrder(id: number): Promise<import("./DTO/order.dto").OrderDto>;
    getOrder(params: OrderQueryRequest): Promise<import("./DTO/order.dto").OrderResponse>;
}
