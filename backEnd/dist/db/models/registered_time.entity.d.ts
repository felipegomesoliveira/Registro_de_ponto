import User from './user.entity';
export default class Registered_time {
    id: number;
    user_id: number;
    createdAt: Date;
    updatedAt: Date;
    authorConnection: Promise<User>;
    userConnection: any;
}
