import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

import { BlogCommentService } from './blog-comment.service';
import { CreateCommentDTO } from '../dto/create-comment.dto';
import { CommentRDO } from '../rdo/comment.rdo';
import { fillDTO } from '@project/helpers';

@Controller('comments')
export class BlogCommentController {
  constructor(
    private readonly blogCommentService: BlogCommentService,
  ) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateCommentDTO) {
    const newComment = await this.blogCommentService.createComment(dto);
    return fillDTO(CommentRDO, newComment.toPOJO());
  }

  @Get('/:postId')
  @HttpCode(HttpStatus.OK)
  public async show(@Param() postId: string) {
    const commentEntities = await this.blogCommentService.getComments(postId);
    const comments = commentEntities.map((entity) => entity?.toPOJO())
    return fillDTO(CommentRDO, comments);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param() id: string) {
    await this.blogCommentService.deleteComment(id);
  }
}