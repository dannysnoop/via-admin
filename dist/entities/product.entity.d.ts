import { BaseEntity } from './base.entity';
import { CategoriesEntity } from './categories.entity';
import { OrderEntity } from './order.entity';
import { ProductDetailEntity } from './product-detail.entity';
import { HistoryTransactionEntity } from "./history-transaction.entity";
export declare class ProductEntity extends BaseEntity {
    id: number;
    price: number;
    holdSale: number;
    quantityLimit: number;
    title: string;
    description: string;
    subDescription: string;
    orderNumber: number;
    isShow: boolean;
    category: CategoriesEntity;
    orders: OrderEntity[];
    historyTransactions: HistoryTransactionEntity[];
    productDetails: ProductDetailEntity[];
}
