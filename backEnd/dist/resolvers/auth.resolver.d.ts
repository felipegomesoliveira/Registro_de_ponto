import { AuthService } from "src/auth.service";
import { AuthType } from "src/types/auth.types";
import AuthInput from "./input/auth.input";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(data: AuthInput): Promise<AuthType>;
}
