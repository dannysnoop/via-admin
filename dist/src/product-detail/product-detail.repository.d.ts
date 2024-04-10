import { DataSource, Repository } from 'typeorm';
import { ProductDetailEntity } from '../../entities/product-detail.entity';
export declare class ProductDetailRepository extends Repository<ProductDetailEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
