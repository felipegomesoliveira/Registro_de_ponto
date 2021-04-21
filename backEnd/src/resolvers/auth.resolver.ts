import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { AuthService } from "src/auth.service";
import User from "src/db/models/user.entity";
import { AuthType } from "src/types/auth.types";
import AuthInput  from "./input/auth.input";


@Resolver(()=> User)
 export class AuthResolver{
    constructor(private authService:AuthService){}

    @Mutation(()=>AuthType)
    public async login(@Args('data') data:AuthInput):
      Promise<AuthType> {
        const response = await this.authService.validateUser(data);
  
        return{
            user:response.user,
            token:response.token
        }
    }
 }
