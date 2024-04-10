import { ChangePasswordDto, CreateUserRequest, UpdateUserRequest, UserDto, UserRequest, UserResponse } from './DTO/user.dto';
import { UserLoginDto } from '../auth/DTO/user-login.dto';
import * as ExcelJS from 'exceljs';
import { UserEntity } from '../../entities/user.entity';
export interface IUserService {
    getAllUser(query: UserRequest): Promise<UserResponse<UserDto>>;
    getAllNewUser(): Promise<UserResponse<UserDto>>;
    createUser(params: CreateUserRequest): Promise<UserDto>;
    updateUser(id: number, params: UpdateUserRequest): Promise<UserDto>;
    deleteUser(): void;
    resetPassword(email: string): Promise<object>;
    otpPassword(otp: string): Promise<object>;
    getUserById(id: number): Promise<UserEntity>;
    checkUserByEmailAndPassword(user: UserLoginDto): Promise<UserDto>;
    changePassword(user: UserDto, params: ChangePasswordDto): Promise<any>;
    exportExcelFileUser(params: UserRequest): Promise<ExcelJS.Buffer>;
    addBalanceForUser(user: UserEntity, amount: number): Promise<void>;
    minusBalanceForUser(user: UserEntity, amount: number): Promise<void>;
    genSecretCodeForTransfer(user: UserDto): Promise<object>;
    activeAllUser(): Promise<void>;
    searchUserBySecretCode(secretCode: string): Promise<UserEntity>;
}
