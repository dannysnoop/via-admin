import { ProductEntity } from './product.entity';
import { BaseEntity } from './base.entity';
export declare class CategoriesEntity extends BaseEntity {
    id: number;
    title: string;
    order: number;
    isShow: boolean;
    icon: string;
    products: ProductEntity[];
}
