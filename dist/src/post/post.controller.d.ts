import { IPostService } from './i.post.service';
import { PostEntity } from '../../entities/post.entity';
import { PostCreateRequest, PostUpdateRequest } from './DTO/post.dto';
export declare class PostController {
    private readonly IPostService;
    constructor(IPostService: IPostService);
    getAllPost(): Promise<import("./DTO/post.dto").PostDto[]>;
    createPost(params: PostCreateRequest): Promise<PostEntity>;
    updatePost(id: number, params: PostUpdateRequest): Promise<PostEntity>;
    getPostDetail(id: number): Promise<PostEntity>;
    removePostDetail(id: number): void;
}
