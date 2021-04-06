import { Repository } from 'typeorm';
import User from './db/models/user.entity';
import Registered_time from './db/models/registered_time.entity';
declare class RepoService {
    readonly userRepo: Repository<User>;
    readonly registered_timeRepo: Repository<Registered_time>;
    constructor(userRepo: Repository<User>, registered_timeRepo: Repository<Registered_time>);
}
export default RepoService;
