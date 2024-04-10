import { IOrderService } from './i.order.service';
import { UserDto } from 'src/user/DTO/user.dto';
import { OrderCreateRequest, OrderDto, OrderQueryRequest, OrderResponse } from './DTO/order.dto';
import { OrderRepository } from './order.repository';
import { IProductService } from '../product/i.product.service';
import { OrderEntity } from '../../entities/order.entity';
import { IProductDetailService } from '../product-detail/i.product-details.service';
import { IUserService } from '../user/i.user.service';
import { IConfigWebService } from '../config-web/i.config-web.service';
import { Pagination } from '../transaction/DTO/transaction.dto';
export declare class OrderService implements IOrderService {
    private readonly repository;
    private readonly IProductService;
    private readonly IProductDetailService;
    private readonly IUserService;
    private readonly IConfigWebService;
    constructor(repository: OrderRepository, IProductService: IProductService, IProductDetailService: IProductDetailService, IUserService: IUserService, IConfigWebService: IConfigWebService);
    getTopNewOrder(): Promise<OrderDto[]>;
    getAllOrder(query: OrderQueryRequest): Promise<OrderResponse>;
    getUserOrder(user: UserDto, query: Pagination): Promise<OrderResponse>;
    createOrder(user: UserDto, params: OrderCreateRequest): Promise<OrderEntity>;
    getDetailOder(orderId: number): Promise<OrderDto>;
    downloadDetailOrder(orderId: number): Promise<string>;
}
