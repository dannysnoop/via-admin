import { AuthService } from './auth.service';
import { UserLoginDto } from "./DTO/user-login.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(login: UserLoginDto): Promise<{
        access_token: any;
    }>;
}
