import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
export declare class HistoryTransactionEntity extends BaseEntity {
    id: number;
    quantity: number;
    product: ProductEntity;
}
