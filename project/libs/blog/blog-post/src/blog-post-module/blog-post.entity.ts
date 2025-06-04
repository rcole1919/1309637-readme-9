import {
  Entity,
  StorableEntity,
  BlogPost,
} from '@project/core';
import { Prisma, $Enums } from '@prisma/client';

import { BlogLikeEntity, BlogLikeFactory } from '@project/blog-like';
import { BlogCommentEntity, BlogCommentFactory } from '@project/blog-comment';

export class BlogPostEntity extends Entity implements StorableEntity<BlogPost> {
  public createdAt!: Date;
  public updatedAt!: Date;
  public userId!: string;
  public tags!: string[];
  public type!: $Enums.PostType;
  public content!: Prisma.JsonValue;
  public likes!: BlogLikeEntity[];
  public comments!: BlogCommentEntity[]; 

  constructor(post?: BlogPost) {
    super();
    this.populate(post);
  }

  public populate(post?: BlogPost): void {
    if (!post) {
      return;
    }

    this.id = post.id ?? '';
    this.createdAt = post.createdAt ?? new Date();
    this.updatedAt = post.updatedAt ?? new Date();
    this.userId = post.userId ?? undefined;
    this.tags = post.tags || [];
    this.type = post.type;
    this.content = post.content as Prisma.JsonObject;
    this.comments = [];
    this.likes = [];

    const blogCommentFactory = new BlogCommentFactory();
    for (const comment of post.comments) {
      const blogCommentEntity = blogCommentFactory.create(comment);
      this.comments.push(blogCommentEntity)
    }

    const blogLikeFactory = new BlogLikeFactory();
    for (const like of post.likes) {
      const blogLikeEntity = blogLikeFactory.create(like);
      this.likes.push(blogLikeEntity)
    }
  }

  public toPOJO(): BlogPost {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId,
      type: this.type,
      content: this.content,
      comments: this.comments.map((entity) => entity.toPOJO()),
      likes: this.likes.map((entity) => entity.toPOJO()),
      tags: this.tags,
    }
  }
}