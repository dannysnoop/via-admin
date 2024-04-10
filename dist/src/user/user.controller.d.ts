import { IUserService } from './i.user.service';
import { ChangePasswordDto, CreateUserRequest, UpdateUserRequest, UserDto, UserOTPRequest, UserRequest, UserResetPassRequest } from "./DTO/user.dto";
import { Cache } from '@nestjs/cache-manager';
export declare class UserController {
    private readonly IUserService;
    private cacheManager;
    constructor(IUserService: IUserService, cacheManager: Cache);
    getAllNewUser(): Promise<import("./DTO/user.dto").UserResponse<UserDto>>;
    resetPassword(params: UserResetPassRequest): Promise<object>;
    OTPPassword(params: UserOTPRequest): Promise<object>;
    getAllUser(query: UserRequest): Promise<import("./DTO/user.dto").UserResponse<UserDto>>;
    getUsersByExcel(query: UserRequest, res: any): Promise<void>;
    activeAllUser(): Promise<void>;
    createUser(params: CreateUserRequest): Promise<UserDto>;
    changePassword(user: UserDto, changePasswordParams: ChangePasswordDto): Promise<any>;
    updateUser(id: number, params: UpdateUserRequest): Promise<UserDto>;
    getCurrentUser(user: UserDto): Promise<import("../../entities/user.entity").UserEntity>;
    getUserById(id: number): Promise<import("../../entities/user.entity").UserEntity>;
    getSecretCode(user: UserDto): Promise<object>;
}
