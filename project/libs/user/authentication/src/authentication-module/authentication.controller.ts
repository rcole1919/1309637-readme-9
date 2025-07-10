import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { fillDTO } from '@project/helpers';
import { UserNotifyService } from '@project/user-notify';
import { AUTH_RESPONSE_MESSAGE } from '@project/core';
import type { RequestWithTokenPayload } from '@project/core';
import { MongoIdValidationPipe } from '@project/pipes';

import { AuthenticationService } from './authentication.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoggedUserRDO } from '../rdo/logged-user.rdo';
import { UserRDO } from '../rdo/user.rdo';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';
import type { RequestWithUser } from './request-with-user.interface';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly notifyService: UserNotifyService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: AUTH_RESPONSE_MESSAGE.USER_CREATED,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: AUTH_RESPONSE_MESSAGE.USER_EXIST,
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDTO) {
    const newUser = await this.authService.register(dto);
    const { email, name } = newUser;
    await this.notifyService.registerSubscriber({ email, name });
    return fillDTO(UserRDO, newUser.toPOJO());
  }

  @ApiResponse({
    type: LoggedUserRDO,
    status: HttpStatus.OK,
    description: AUTH_RESPONSE_MESSAGE.LOGGED_SUCCESS,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: AUTH_RESPONSE_MESSAGE.LOGGED_ERROR,
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() { user }: RequestWithUser) {
    const userToken = await this.authService.createUserToken(user);
    return fillDTO(LoggedUserRDO, { ...user.toPOJO(), ...userToken});
  }

  @ApiResponse({
    type: UserRDO,
    status: HttpStatus.OK,
    description: AUTH_RESPONSE_MESSAGE.USER_FOUND,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: AUTH_RESPONSE_MESSAGE.USER_NOT_FOUND,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const existUser = await this.authService.getUser(id);
    return fillDTO(UserRDO, existUser);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: AUTH_RESPONSE_MESSAGE.GET_NEW_TOKEN,
  })
  public async refreshToken(@Req() { user }: RequestWithUser) {
    return this.authService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Req() { user: payload }: RequestWithTokenPayload) {
    return payload;
  }
}
