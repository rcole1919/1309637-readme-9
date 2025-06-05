import { Injectable } from '@nestjs/common';

import { Like, EntityFactory } from '@project/core';
import { BlogLikeEntity } from './blog-like.entity';
import { CreateLikeDTO } from '../dto/create-like.dto';

@Injectable()
export class BlogLikeFactory implements EntityFactory<BlogLikeEntity> {
  create(entityPlainData: Like): BlogLikeEntity {
    return new BlogLikeEntity(entityPlainData);
  }

  public static createFromCreateLikeDTO(dto: CreateLikeDTO): BlogLikeEntity {
    const entity = new BlogLikeEntity();
    entity.userId = dto.userId;
    entity.postId = dto.postId;

    return entity;
  }
}