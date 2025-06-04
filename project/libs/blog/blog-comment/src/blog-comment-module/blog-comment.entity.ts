import { Entity, StorableEntity, Comment } from '@project/core';

export class BlogCommentEntity extends Entity implements StorableEntity<Comment> {
  public createdAt!: Date;
  public updatedAt!: Date;
  public postId!: string;
  public userId!: string;
  public message!: string;

  constructor(comment?: Comment) {
    super();
    this.populate(comment);
  }

  public populate(comment?: Comment): void {
    if (!comment) {
      return;
    }

    this.id = comment.id ?? '';
    this.createdAt = comment.createdAt ?? new Date();
    this.updatedAt = comment.updatedAt ?? new Date();
    this.postId = comment.postId ?? undefined;
    this.userId = comment.userId ?? undefined;
  }

  public toPOJO(): Comment {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      postId: this.postId,
      userId: this.userId,
      message: this.message,
    }
  }
}