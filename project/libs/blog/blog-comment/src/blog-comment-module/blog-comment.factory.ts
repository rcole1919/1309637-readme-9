import { Injectable } from '@nestjs/common';

import { Comment, EntityFactory } from '@project/core';
import { BlogCommentEntity } from './blog-comment.entity';
import { CreateCommentDTO } from '../dto/create-comment.dto';

@Injectable()
export class BlogCommentFactory implements EntityFactory<BlogCommentEntity> {
  create(entityPlainData: Comment): BlogCommentEntity {
    return new BlogCommentEntity(entityPlainData);
  }

  public static createFromCreateCommentDTO(dto: CreateCommentDTO): BlogCommentEntity {
    const entity = new BlogCommentEntity();
    entity.message = dto.message;
    entity.userId = dto.userId;
    entity.postId = dto.postId;

    return entity;
  }
}