import { DataSource, Repository } from 'typeorm';
import { ConfigEntity } from '../../entities/config.entity';
export declare class ConfigWebRepository extends Repository<ConfigEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
