import { ROLE } from '../../../helper/constant';
import { UserEntity } from '../../../entities/user.entity';
export declare class UserDto {
    id: number;
    username: string;
    device: string;
    role: ROLE;
    email: string;
    is2FA: boolean;
    createdAt: string;
    updatedAt: string;
    discount: number;
    constructor(user: UserEntity);
}
export declare class UserRequest {
    username: string;
    phone: string;
    ip: string;
    role: number;
    take: number;
    page: number;
}
export declare class UserResetPassRequest {
    email: string;
}
export declare class UserOTPRequest {
    otp: string;
}
export declare class UserResponse<T> {
    data: T[];
    totalRecord: number;
    page: number;
    limit: number;
    currentPage: number;
    yesterdayUser: number;
    constructor(data: T[], page?: number, take?: number, totalRecord?: number, yesterdayUser?: any);
}
export declare class CreateUserRequest {
    username: string;
    phone: string;
    password: string;
    role: ROLE;
    email: string;
    is2FA: boolean;
    balance: number;
}
export declare class UpdateUserRequest {
    role: ROLE;
    discount: number;
    isAffiliate: boolean;
    email: string;
    password: string;
    confirmPassword: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
