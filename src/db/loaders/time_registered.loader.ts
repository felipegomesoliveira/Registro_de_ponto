import DataLoader = require('dataloader');
import User from '../models/user.entity';
import { getRepository } from 'typeorm';
import RegisteredTime from '../models/registered_time.entity';

const batchTimeRegistered = async (userids: string[]) => {
  const userId= await getRepository(User)
    .createQueryBuilder('users')
    .leftJoinAndSelect('registered_time.user_id', 'users')
    .where('registered_time.id IN(:...ids)', {ids: userids})
    .getMany();
  const userIdToRegisteredTime: {[key: string]: RegisteredTime[]} = {};
  userId.forEach(userId => {
    if (!userIdToRegisteredTime[userId.id]) {
        userIdToRegisteredTime[userId.id] = [(userId as any).__users__];
    } else {
        userIdToRegisteredTime[userId.id].push((userId as any).__users__);
    }
  });
  return userids.map(userId => userIdToRegisteredTime[userId]);
};
const registered_timeLoader = () => new DataLoader(batchTimeRegistered);

export {
    registered_timeLoader,
};