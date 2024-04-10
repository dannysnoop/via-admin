import { DataSource, Repository } from 'typeorm';
import { CategoriesEntity } from '../../entities/categories.entity';
export declare class CategoryRepository extends Repository<CategoriesEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
