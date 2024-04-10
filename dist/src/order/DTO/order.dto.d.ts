import { UserResponse } from '../../user/DTO/user.dto';
export declare class OrderDto {
    id: number;
    createdDate: string;
    username: string;
    productName: string;
    quantity: number;
    totalPrice: number;
    info: string[];
    uid: string[];
}
export declare class OrderResponse extends UserResponse<OrderDto> {
}
export declare class OrderCreateRequest {
    productId: number;
    quantity: number;
}
export declare class OrderQueryRequest {
    id: number;
    username: string;
    phone: string;
    uid: string;
    take: number;
    page: number;
}
