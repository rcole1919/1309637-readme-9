import { ConflictException, Injectable } from '@nestjs/common';
import { AUTH_USER_EXISTS } from '@project/core';

import { BlogUserRepository, BlogUserEntity } from '@project/blog-user';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository,
  ) {}

  public async register(dto: CreateUserDto) {
    const { email, name, password } = dto;

    const blogUser = {
      email,
      name,
      passwordHash: '',
    };

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS)
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);

    return this.blogUserRepository.save(userEntity);
  }
}
