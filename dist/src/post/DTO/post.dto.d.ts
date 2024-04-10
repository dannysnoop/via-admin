import { PostEntity } from '../../../entities/post.entity';
export declare class PostDto {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    isShowTop: boolean;
}
export declare class PostCreateRequest extends PostEntity {
}
export declare class PostUpdateRequest extends PostEntity {
}
