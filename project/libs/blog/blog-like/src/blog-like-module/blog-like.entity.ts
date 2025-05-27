import { Entity, StorableEntity, Like } from '@project/core';

export class BlogLikeEntity extends Entity implements StorableEntity<Like> {
  public createdAt!: Date;
  public updatedAt!: Date;
  public postId!: string;
  public userId!: string;

  constructor(like?: Like) {
    super();
    this.populate(like);
  }

  public populate(like?: Like): void {
    if (!like) {
      return;
    }

    this.id = like.id ?? '';
    this.createdAt = like.createdAt ?? new Date();
    this.updatedAt = like.updatedAt ?? new Date();
    this.postId = like.postId ?? undefined;
    this.userId = like.userId ?? undefined;
  }

  public toPOJO(): Like {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      postId: this.postId,
      userId: this.userId,
    }
  }
}