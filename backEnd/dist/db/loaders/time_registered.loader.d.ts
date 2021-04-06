import DataLoader = require('dataloader');
import RegisteredTime from '../models/registered_time.entity';
declare const registered_timeLoader: () => DataLoader<string, RegisteredTime[], string>;
export { registered_timeLoader, };
