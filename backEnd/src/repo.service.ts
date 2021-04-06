import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from './db/models/user.entity';
import Registered_time from './db/models/registered_time.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Registered_time) public readonly registered_timeRepo: Repository<Registered_time>,
  ) {}
}

export default RepoService;