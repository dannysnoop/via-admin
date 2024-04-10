import { IPostService } from './i.post.service';
import { PostEntity } from 'entities/post.entity';
import { PostCreateRequest, PostDto, PostUpdateRequest } from './DTO/post.dto';
import { PostRepository } from './post.repository';
export declare class PostService implements IPostService {
    private readonly repository;
    constructor(repository: PostRepository);
    removePost(id: number): void;
    createPost(params: PostCreateRequest): Promise<PostEntity>;
    updatePost(id: number, params: PostUpdateRequest): Promise<PostEntity>;
    getListPost(): Promise<PostDto[]>;
    getDetailPost(id: number): Promise<PostEntity>;
}
