import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import { BlogPostService } from './blog-post.service';
import { blogPostRDOSelect } from './blog-post.rdo-select';
import type { CreatePostDTO } from '../dto/types/post-dto.type';
import { BlogPostQuery } from './blog-post.query';
import { PostWithPaginationRDO } from '../rdo/post-with-pagination.rdo';
import { fillDTO } from '@project/helpers';

@Controller('posts')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService,
  ) {}

  @Post('/:type')
  @HttpCode(HttpStatus.CREATED)
  public async createPost(
    @Body() dto: CreatePostDTO,
    @Param('type') type: $Enums.PostType,
  ) {
    const newPost = await this.blogPostService.createPost(dto, type);
    return blogPostRDOSelect(newPost, type);
  }

  @Get('/')
  public async index(@Query() query: BlogPostQuery) {
    const postsWithPagination = await this.blogPostService.getAllPosts(query);
    const result = {
      ...postsWithPagination,
      entities: postsWithPagination.entities.map((post) => post?.toPOJO()),
    }
    return fillDTO(PostWithPaginationRDO, result);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    const post = await this.blogPostService.getPost(id);
    return blogPostRDOSelect(post, post?.type);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param() id: string) {
    await this.blogPostService.deletePost(id);
  }
}