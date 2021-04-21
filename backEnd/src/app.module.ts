import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';

import * as ormOptions from './config/orm';
import RepoModule from './repo.module';
import UserResolve from './resolvers/user.resolver'
import Registered_time from './resolvers/time_registered.resolver'
import { registered_timeLoader } from './db/loaders/time_registered.loader';
import AuthModule from './auth.module';
import { JwtStrategy } from './auth/jwt.strategy';

const gqlImports = [
  UserResolve,
  Registered_time
]

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule, AuthModule,JwtStrategy, ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
      context: ({req}) => ({req})
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
