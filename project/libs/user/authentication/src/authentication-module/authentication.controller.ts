import { Controller, Post, Body, Get, Param, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { fillDTO } from '@project/helpers';

import { AuthenticationService } from './authentication.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoginUserDTO } from '../dto/login-user.dto';
import { LoggedUserRDO } from '../rdo/logged-user.rdo';
import { UserRDO } from '../rdo/user.rdo';
import { AUTH_RESPONSE_MESSAGE } from '@project/core';
import { MongoIdValidationPipe } from '@project/pipes';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
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
  @Post('login')
  public async login(@Body() dto: LoginUserDTO) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return fillDTO(LoggedUserRDO, verifiedUser.toPOJO());
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
  @Get(':id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const existUser = await this.authService.getUser(id);
    return fillDTO(UserRDO, existUser);
  }
}
