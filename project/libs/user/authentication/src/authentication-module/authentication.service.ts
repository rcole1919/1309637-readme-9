import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AUTH_USER_MESSAGE } from '@project/core';

import { BlogUserRepository, BlogUserEntity } from '@project/blog-user';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoginUserDTO } from '../dto/login-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository,
  ) {}

  public async register(dto: CreateUserDTO): Promise<BlogUserEntity> {
    const { email, name, password } = dto;

    const blogUser = {
      email,
      name,
      passwordHash: '',
    };

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_MESSAGE.EXISTS)
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);

    await this.blogUserRepository.save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDTO) {
    const { email, password } = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_MESSAGE.NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_MESSAGE.PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const user = await this.blogUserRepository.findById(id);

    if (!user) {
      throw new NotFoundException(AUTH_USER_MESSAGE.NOT_FOUND);
    }

    return user;
  } 
}
