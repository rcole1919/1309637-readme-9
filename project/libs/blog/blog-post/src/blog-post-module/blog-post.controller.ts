import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import { BlogPostService } from './blog-post.service';
import { fillDTO } from '@project/helpers';
import { PostVideoDTO } from '../dto/post-video.dto';
import { PostTextDTO } from '../dto/post-text.dto';
import { PostLinkDTO } from '../dto/post-link.dto';
import { PostPhotoDTO } from '../dto/post-photo.dto';
import { PostCiteDTO } from '../dto/post-cite.dto';
import { PostVideoRDO } from '../rdo/post-video.rdo';
import { PostTextRDO } from '../rdo/post-text.rdo';
import { PostLinkRDO } from '../rdo/post-link.rdo';
import { PostCiteRDO } from '../rdo/post-cite.rdo';
import { PostPhotoRDO } from '../rdo/post-photo.rdo';

@Controller('posts')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService,
  ) {}

  @Post('/video')
  @HttpCode(HttpStatus.CREATED)
  public async createVideo(@Body() dto: PostVideoDTO) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillDTO(PostVideoRDO, newPost.toPOJO());
  }

  @Post('/text')
  @HttpCode(HttpStatus.CREATED)
  public async createText(@Body() dto: PostTextDTO) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillDTO(PostTextRDO, newPost.toPOJO());
  }

  @Post('/link')
  @HttpCode(HttpStatus.CREATED)
  public async createLink(@Body() dto: PostLinkDTO) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillDTO(PostLinkRDO, newPost.toPOJO());
  }

  @Post('/cite')
  @HttpCode(HttpStatus.CREATED)
  public async createCite(@Body() dto: PostCiteDTO) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillDTO(PostCiteRDO, newPost.toPOJO());
  }

  @Post('/photo')
  @HttpCode(HttpStatus.CREATED)
  public async createPhoto(@Body() dto: PostPhotoDTO) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillDTO(PostPhotoRDO, newPost.toPOJO());
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param() id: string) {
    const post = await this.blogPostService.getPost(id);
    switch (post?.type) {
      case $Enums.PostType.video:
        return fillDTO(PostVideoRDO, post.toPOJO());

      case $Enums.PostType.cite:
        return fillDTO(PostCiteRDO, post.toPOJO());

      case $Enums.PostType.text:
        return fillDTO(PostTextRDO, post.toPOJO());

      case $Enums.PostType.photo:
        return fillDTO(PostPhotoRDO, post.toPOJO());

      case $Enums.PostType.link:
        return fillDTO(PostLinkRDO, post.toPOJO());

      default:
        return;
    }
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param() id: string) {
    await this.blogPostService.deletePost(id);
  }
}