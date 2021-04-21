import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from './db/models/user.entity';
import Registered_time from './db/models/registered_time.entity';
import { Args } from '@nestjs/graphql';
@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Registered_time) public readonly registered_timeRepo: Repository<Registered_time>,
  ) {}
  public async getUserByEmail(@Args('email') email:string):Promise<User> {
    const userEmail = await this.userRepo.findOne({email});
    return userEmail
  }

  public async getUserById(@Args('id') id:number):Promise<User> {
    const userId = await this.userRepo.findOne(id)
    if (!userId) {
      throw new NotFoundException('User not found');
    }
    return userId
  }
}


export default RepoService;