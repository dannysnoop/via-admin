import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from '../../entities/product.entity';
export declare class ProductRepository extends Repository<ProductEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getProductById(id: number): Promise<ProductEntity>;
    getAllProduct(): Promise<[ProductEntity[], number]>;
}
