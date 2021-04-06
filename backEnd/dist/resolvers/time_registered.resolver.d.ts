import Registered_time from 'src/db/models/registered_time.entity';
import User from 'src/db/models/user.entity';
import RepoService from 'src/repo.service';
import TimeRegistederedInput from './input/registered_time.input';
export default class TimeRegisteredResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getRegistereds_time(): Promise<Registered_time[]>;
    getRegistereds_timeFromUSer(user_id: number): Promise<Registered_time[]>;
    getRegistered_time(id: number): Promise<Registered_time>;
    createRegisteredTime(input: TimeRegistederedInput): Promise<Registered_time>;
    newTime_registered(): AsyncIterator<unknown, any, undefined>;
    user(parent: Registered_time): Promise<User>;
}
