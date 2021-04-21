import { UseGuards } from '@nestjs/common';
import {  Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GqlAuthGuard } from 'src/auth/auth.guard';
import User from 'src/db/models/user.entity';
import RepoService from 'src/repo.service';
import UserInput from './input/user.input';
@Resolver(()=> User)
export default class UserResolver {
  constructor(private readonly repoService: RepoService) {}

    @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }

  @Query(() => User, {nullable: true})
  @UseGuards(GqlAuthGuard)
  public async getUser(@Args('id') id: number): Promise<User> {
    return  this.repoService.userRepo.findOne(id);
  }

  @Query(()=>User, {nullable: true})
  public async userByEmail(@Args('email') email:string):Promise<User> {
    return this.repoService.getUserByEmail(email);
  };

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): 
    Promise<User> {
      const user = this.repoService.userRepo.create({
      name: input.name, 
      email:input.email,
      password:input.password,
      role:input.role
    });
      return  this.repoService.userRepo.save(user);
  }
}
