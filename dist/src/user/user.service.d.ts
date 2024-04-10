import { UserRepository } from './user.repository';
import { IUserService } from './i.user.service';
import { ChangePasswordDto, CreateUserRequest, UpdateUserRequest, UserDto, UserRequest, UserResponse } from './DTO/user.dto';
import { UserEntity } from '../../entities/user.entity';
import * as ExcelJS from 'exceljs';
import { UserLoginDto } from '../auth/DTO/user-login.dto';
export declare class UserService implements IUserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    otpPassword(OTP: string): Promise<object>;
    searchUserBySecretCode(secretCode?: string): Promise<UserEntity>;
    activeAllUser(): Promise<void>;
    genSecretCodeForTransfer(user: UserDto): Promise<object>;
    getAllNewUser(): Promise<UserResponse<UserDto>>;
    exportExcelFileUser(params: UserRequest): Promise<ExcelJS.Buffer>;
    getUserById(id: number): Promise<UserEntity>;
    getAllUser(queryParams: UserRequest): Promise<UserResponse<UserDto>>;
    createUser(params: CreateUserRequest): Promise<UserDto>;
    updateUser(id: number, params: UpdateUserRequest): Promise<UserDto>;
    deleteUser(): void;
    resetPassword(email?: string): Promise<{
        message: string;
        statusCode: number;
    }>;
    checkUserByEmailAndPassword(user: UserLoginDto): Promise<UserDto>;
    changePassword(user: UserDto, params: ChangePasswordDto): Promise<{
        status: number;
        message: string;
    }>;
    addBalanceForUser(user: UserEntity, amount: number): Promise<void>;
    minusBalanceForUser(user: UserEntity, amount: number): Promise<void>;
}
