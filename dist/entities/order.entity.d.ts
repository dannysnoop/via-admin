import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { ORDER_STATUS } from '../helper/constant';
import { ProductEntity } from './product.entity';
import { ProductDetailEntity } from "./product-detail.entity";
export declare class OrderEntity extends BaseEntity {
    id: number;
    quantity: number;
    totalPrice: number;
    product: ProductEntity;
    productDetails: ProductDetailEntity[];
    status: ORDER_STATUS;
    user: UserEntity;
}
