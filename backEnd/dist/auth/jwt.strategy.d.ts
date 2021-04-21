import { Strategy } from 'passport-jwt';
import RepoService from 'src/repo.service';
import User from 'src/db/models/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: RepoService);
    validate(payload: {
        sub: User['id'];
    }, name: string): Promise<User>;
}
export {};
