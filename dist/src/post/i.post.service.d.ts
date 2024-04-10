import { PostCreateRequest, PostDto, PostUpdateRequest } from "./DTO/post.dto";
import { PostEntity } from '../../entities/post.entity';
export interface IPostService {
    createPost(params: PostCreateRequest): Promise<PostEntity>;
    updatePost(id: number, params: PostUpdateRequest): Promise<PostEntity>;
    getListPost(): Promise<PostDto[]>;
    getDetailPost(id: number): Promise<PostEntity>;
    removePost(id: number): void;
}
