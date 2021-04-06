import Registered_time from './registered_time.entity';
export default class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    userConnection: Promise<Registered_time[]>;
    registered_timeConnection: any;
}
