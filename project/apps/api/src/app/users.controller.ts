import { HttpService } from '@nestjs/axios';
import type { Request } from 'express';
import { Body, Controller, Post, Req, UseFilters } from '@nestjs/common';

import { LoginUserDTO } from '@project/authentication';

import { ApplicationServiceURL } from './app.config';
import { AxiosExceptionFilter } from './flilters/axios-exception.filter';

@Controller('users')
export class UsersController {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  @Post('login')
  @UseFilters(AxiosExceptionFilter)
  public async login(@Body() loginUserDto: LoginUserDTO) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/login`, loginUserDto);
    return data;
  }

  @Post('refresh')
  public async refreshToken(@Req() req: Request) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/refresh`, null, {
      headers: {
        'Authorization': req.headers['authorization']
      }
    });

    return data;
  }
}