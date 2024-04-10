import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
export declare class UserRepository extends Repository<UserEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
