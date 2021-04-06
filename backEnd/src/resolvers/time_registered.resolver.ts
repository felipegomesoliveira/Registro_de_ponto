import {  Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import Registered_time from 'src/db/models/registered_time.entity';
import User from 'src/db/models/user.entity';
import RepoService from 'src/repo.service';
import TimeRegistederedInput from './input/registered_time.input';

const pubSub = new PubSub()
const NEW_TIME_REGISTERED= 'NEW_TIME_REGISTERED'

@Resolver(() => Registered_time)
export default class TimeRegisteredResolver {
    constructor(private readonly repoService: RepoService) {}

    @Query(() => [Registered_time])
  public async getRegistereds_time(): Promise<Registered_time[]> {
    return this.repoService.registered_timeRepo.find();
  }
  @Query(() => [Registered_time])
  public async getRegistereds_timeFromUSer(@Args('user_id') user_id: number): Promise<Registered_time[]> {
    return  this.repoService.registered_timeRepo.find({
        where: {user_id}
    });
  }

  @Query( () => Registered_time, {nullable:true})
  public async getRegistered_time(@Args('id') id:number):Promise<Registered_time>{
    return this.repoService.registered_timeRepo.findOne(id)
  }

  @Mutation(() => Registered_time)
  public async createRegisteredTime(@Args('data') input: TimeRegistederedInput): 
    Promise<Registered_time> {
      const registeredTime = this.repoService.registered_timeRepo.create({
        user_id: input.user_id
      });
      const timeRegisteredSave = this.repoService.registered_timeRepo.save(registeredTime)
      
      pubSub.publish('newTime_registered', timeRegisteredSave)
     
      return  timeRegisteredSave
  }

  @Subscription(() => Registered_time,{
    resolve(this: TimeRegisteredResolver, timeRegisteredSave){
      return timeRegisteredSave
    }
  })
  newTime_registered() {
    return pubSub.asyncIterator('newTime_registered')
  }

  @ResolveField(() => User)
  public async user(@Parent() parent: Registered_time): Promise<User> {
    return this.repoService.userRepo.findOne(parent.user_id);
  }

}