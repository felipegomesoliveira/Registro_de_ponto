"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registered_timeLoader = void 0;
const DataLoader = require("dataloader");
const user_entity_1 = require("../models/user.entity");
const typeorm_1 = require("typeorm");
const batchTimeRegistered = async (userids) => {
    const userId = await typeorm_1.getRepository(user_entity_1.default)
        .createQueryBuilder('users')
        .leftJoinAndSelect('registered_time.user_id', 'users')
        .where('registered_time.id IN(:...ids)', { ids: userids })
        .getMany();
    const userIdToRegisteredTime = {};
    userId.forEach(userId => {
        if (!userIdToRegisteredTime[userId.id]) {
            userIdToRegisteredTime[userId.id] = [userId.__users__];
        }
        else {
            userIdToRegisteredTime[userId.id].push(userId.__users__);
        }
    });
    return userids.map(userId => userIdToRegisteredTime[userId]);
};
const registered_timeLoader = () => new DataLoader(batchTimeRegistered);
exports.registered_timeLoader = registered_timeLoader;
//# sourceMappingURL=time_registered.loader.js.map