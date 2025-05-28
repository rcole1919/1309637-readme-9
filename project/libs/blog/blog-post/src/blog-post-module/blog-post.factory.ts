import { Injectable } from '@nestjs/common';

import { BlogPost, EntityFactory } from '@project/core';
import { BlogPostEntity } from './blog-post.entity';
import { PostDTO } from '../dto/types/post-dto.type';

@Injectable()
export class BlogPostFactory implements EntityFactory<BlogPostEntity> {
  public create(entityPlainData: BlogPost): BlogPostEntity {
    return new BlogPostEntity(entityPlainData);
  }

  public static createFromCreatePostDTO(dto: PostDTO): BlogPostEntity {
    const entity = new BlogPostEntity();
    entity.content = JSON.stringify(dto.content);
    entity.userId = dto.userId;
    entity.tags = dto.tags;
    entity.comments = [];
    entity.likes = [];

    return entity;
  } 
}