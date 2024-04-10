import { UserResponse } from '../../user/DTO/user.dto';
import { ProductEntity } from "../../../entities/product.entity";
export declare class ProductDto {
    id: number;
    title: string;
    description: string;
    subDescription: string;
    orderNumber: number;
    category: {
        id: number;
        title: string;
    };
    price: number;
    isShow: boolean;
    createdAt: string;
    updatedAt: string;
    productDetails: number;
}
export declare class ProductResponse extends UserResponse<ProductDto> {
}
export declare class ProductEntityResponse extends UserResponse<ProductEntity> {
}
export declare class ProductCreateRequest {
    title: string;
    description: string;
    subDescription: string;
    price: number;
    quantityLimit: number;
    holeSale: number;
    categoryId: number;
    isShow: boolean;
    orderNumber: number;
}
export declare class ProductUpdateRequest extends ProductCreateRequest {
}
export declare class ProductQueryRequest {
    categoryId: number;
    productName: string;
}
export declare class ProductQueryCategoryIdAndProductNameRequest {
    productName: string;
}
