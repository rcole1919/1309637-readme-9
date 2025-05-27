import { Body, Controller, Delete, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { BlogLikeService } from './blog-like.service';
import { CreateLikeDTO } from '../dto/create-like.dto';


@Controller('likes')
export class BlogLikeController {
  constructor(
    private readonly blogLikeService: BlogLikeService,
  ) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateLikeDTO) {
    await this.blogLikeService.createLike(dto);
  }

  @Delete('/')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Body() dto: CreateLikeDTO) {
    await this.blogLikeService.createLike(dto);
  }
}