import { Global } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { GqlAuthGuard } from "./auth/auth.guard";
import { JwtStrategy } from "./auth/jwt.strategy";

import User from './db/models/user.entity';
import { AuthResolver } from "./resolvers/auth.resolver";

@Global()
@Module({
    imports: [
      TypeOrmModule.forFeature([
        User,
      ]),

      JwtModule.registerAsync({
        useFactory:() => ({
          secret:'patafofa',
          signOptions:{
            expiresIn:'30s'
          }
        })
      })
    ],
    providers: [AuthService, AuthResolver,JwtStrategy],
  })
  class AuthModule {
  
  }
  export default AuthModule;