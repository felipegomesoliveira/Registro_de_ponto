import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import RepoService from 'src/repo.service';
import User from 'src/db/models/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService:RepoService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'patafofa',
    });
  }

  async validate(payload: {sub:User['id']}, name:string) {
    const user = this.userService.getUserById(payload.sub)
    if (!user) {
      throw new NotFoundException('Não Autorizado');
    }
    return user;
  }
}