import { registered_timeLoader } from '../db/loaders/time_registered.loader';
export interface IGraphQLContext {
    registered_timeLoader: ReturnType<typeof registered_timeLoader>;
}
