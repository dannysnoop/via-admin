import { UserResponse } from '../../user/DTO/user.dto';
export declare class CategoryDto {
    id: number;
    title: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    icon: string;
    isShow: boolean;
}
export declare class CategoryResponse extends UserResponse<CategoryDto> {
}
export declare class CategoryCreateRequest {
    title: string;
    isShow: boolean;
    order: number;
    icon: string;
}
export declare class CategoryQueryRequest {
    q: string;
}
export declare class CategoryUpdateRequest extends CategoryCreateRequest {
}
