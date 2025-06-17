import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, Inject } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';

import { TokenPayload } from '@project/core';
import { jwtConfig } from '@project/user-config';

import { AuthenticationService } from '../authentication-module/authentication.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    @Inject(jwtConfig.KEY) jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly authService: AuthenticationService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtOptions.refreshTokenSecret,
    });
  }

  public async validate(payload: TokenPayload) {
    return this.authService.getUserByEmail(payload.email);
  }
}