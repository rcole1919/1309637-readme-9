import { Injectable } from '@nestjs/common';

import { PrismaClientService } from '@project/blog-models';
import { Like, MAX_LIKES_LIMIT } from '@project/core';
import { BasePostgresRepository } from '@project/data-access';

import { BlogLikeEntity } from './blog-like.entity';
import { BlogLikeFactory } from './blog-like.factory';
import { LikeFilter, likeFiltertoPrismaFilter } from './blog-like.filter';

@Injectable()
export class BlogLikeRepository extends BasePostgresRepository<BlogLikeEntity, Like> {
  constructor(
    entityFactory: BlogLikeFactory,
    override readonly client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  public override async save(entity: BlogLikeEntity): Promise<void> {
    const record = await this.client.like.create({
      data: { ...entity.toPOJO() }
    });

    entity.id = record.id;
  }

  public async find(filter?: LikeFilter): Promise<(BlogLikeEntity | null)[]> {
    const where = filter ?? likeFiltertoPrismaFilter(filter);

    const documents = await this.client.like.findMany({
      where,
      take: MAX_LIKES_LIMIT,
    })

    return documents.map((document) => this.createEntityFromDocument(document));
  }

  public override async deleteById(id: string): Promise<void> {
    await this.client.like.delete({
      where: {
        id,
      }
    })
  }
}