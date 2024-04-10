import { DataSource, Repository } from 'typeorm';
import { OrderEntity } from '../../entities/order.entity';
export declare class OrderRepository extends Repository<OrderEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
