import { ProductEntity } from '../../../entities/product.entity';
import { UserResponse } from '../../user/DTO/user.dto';
export declare class ProductDetailDto {
    info: string;
    isShow: boolean;
    createdAt: string;
    updatedAt: string;
    product: ProductEntity;
}
export declare class HistoryTransactionDTO {
    createdAt: string;
    productTitle: string;
    quantity: number;
}
export declare class HistoryTransactionResponse extends UserResponse<HistoryTransactionDTO> {
}
export declare class ProductDetailResponse extends UserResponse<ProductDetailDto> {
}
export declare class ProductDetailCreateRequest {
    lstInfo: string[];
    productId: number;
}
export declare class ProductDetailUpdateRequest {
    info: string;
    isShow: boolean;
    productId: number;
}
export declare class ProductDetailCreateResponse {
    lstNewProduct: string[];
    listUpdateProduct: string[];
    totalLine: number;
    failNumber: number;
    constructor(lstNewProduct: string[], listUpdateProduct: string[], totalLine: number, failNumber: number);
}
export declare class ProductSearchRequest {
    q: string;
    take: number;
    page: number;
}
export declare class UidRequest {
    uid: number;
}
