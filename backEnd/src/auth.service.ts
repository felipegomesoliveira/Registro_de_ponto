import {Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {compareSync} from 'bcrypt';
import User from './db/models/user.entity';

import RepoService from './repo.service';
import AuthInput  from './resolvers/input/auth.input';
import { AuthType } from './types/auth.types';

@Injectable()
export class AuthService {
 constructor( private userService:RepoService,
              private jwtService: JwtService
            ){}

 async validateUser(data:AuthInput):Promise<AuthType>{
     const user = await this.userService.getUserByEmail(data.email);

     const validUser = compareSync(data.password, user.password);
     

     if(!validUser){
         throw new UnauthorizedException('incorrect password');
     }

     const token = await this.jwtToken(user)

     return{
         user, 
         token
     }
 }

 private jwtToken(user:User):Promise<string>{
     const payload = {userName: user.name, sub:user.id }
     return this.jwtService.signAsync(payload)
 }
}