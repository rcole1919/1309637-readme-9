import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import { BlogPostService } from './blog-post.service';
import { blogPostRDOSelect } from './blog-post.rdo-select';
import type { CreatePostDTO } from 'src/dto/types/post-dto.type';

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