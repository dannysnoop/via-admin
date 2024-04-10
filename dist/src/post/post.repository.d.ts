import { DataSource, Repository } from 'typeorm';
import { PostEntity } from '../../entities/post.entity';
export declare class PostRepository extends Repository<PostEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
