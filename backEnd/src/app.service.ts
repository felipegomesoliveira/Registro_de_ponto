import { Injectable } from '@nestjs/common';
import RepoService from './repo.service';

@Injectable()
export class AppService {
    constructor(private readonly repoService:RepoService){

    }
    async getHello():Promise<string>{
      return `there are ${await this.repoService.registered_timeRepo.count()} existent time_registered`
    }
};
