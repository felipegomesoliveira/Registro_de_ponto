import { JwtService } from '@nestjs/jwt';
import RepoService from './repo.service';
import AuthInput from './resolvers/input/auth.input';
import { AuthType } from './types/auth.types';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: RepoService, jwtService: JwtService);
    validateUser(data: AuthInput): Promise<AuthType>;
    private jwtToken;
}
