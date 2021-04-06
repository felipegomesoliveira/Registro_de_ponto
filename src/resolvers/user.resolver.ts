import {  Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import User from 'src/db/models/user.entity';
import RepoService from 'src/repo.service';
import UserInput from './input/user.input';

@Resolver()
export default class USerResolver {
    constructor(private readonly repoService: RepoService) {}

    @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }
  @Query(() => User, {nullable: true})
  public async getUser(@Args('id') id: number): Promise<User> {
    return  this.repoService.userRepo.findOne(id);
  }

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