import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './repo.service';
import User from './db/models/user.entity';
import Registered_time from './db/models/registered_time.entity';


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Registered_time
    ]),
  ],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {

}
export default RepoModule;