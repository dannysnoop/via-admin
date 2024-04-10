import { UserLoginDto } from './DTO/user-login.dto';
import { IUserService } from '../user/i.user.service';
export declare class AuthService {
    private readonly IUserService;
    constructor(IUserService: IUserService);
    validateUser(userLogin: UserLoginDto): Promise<{
        access_token: any;
    }>;
}
