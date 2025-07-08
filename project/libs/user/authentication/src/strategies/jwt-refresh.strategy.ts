import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, Inject } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';

import { RefreshTokenPayload } from '@project/core';
import { jwtConfig } from '@project/user-config';

import { AuthenticationService } from '../authentication-module/authentication.service';
import { RefreshTokenService } from '../refresh-token-module/refresh-token.service';
import { TokenNotExistsException } from '../exceptions/token-not-exist.exception';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    @Inject(jwtConfig.KEY) jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly authService: AuthenticationService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtOptions.refreshTokenSecret,
    });
  }

  public async validate(payload: RefreshTokenPayload) {
    if (! await this.refreshTokenService.isExists(payload.tokenId)) {
      throw new TokenNotExistsException(payload.tokenId);
    }

    await this.refreshTokenService.deleteRefreshSession(payload.tokenId);

    return this.authService.getUserByEmail(payload.email);
  }
}