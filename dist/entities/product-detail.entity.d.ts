import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';
export declare class ProductDetailEntity extends BaseEntity {
    id: number;
    product: ProductEntity;
    order: OrderEntity;
    info: string;
    isShow: boolean;
    uid: string;
    isSale: boolean;
    beforeUpdate(): Promise<void>;
}
