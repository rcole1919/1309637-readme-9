import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaClientService } from '@project/blog-models';
import { BlogPost } from '@project/core';
import { BasePostgresRepository } from '@project/data-access';

import { BlogPostEntity } from './blog-post.entity';
import { BlogPostFactory } from './blog-post.factory';

@Injectable()
export class BlogPostRepository extends BasePostgresRepository<BlogPostEntity, BlogPost> {
  constructor(
    entityFactory: BlogPostFactory,
    override readonly client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  public override async save(entity: BlogPostEntity): Promise<void> {
    const plainObject = entity.toPOJO();
    const record = await this.client.post.create({
      data: {
        ...plainObject,
        comments: {
          connect: []
        },
        likes: {
          connect: [],
        },
        content: plainObject.content as Prisma.JsonObject,
      },
    });
    entity.id = record.id;
  }

  public override async findById(id: string): Promise<BlogPostEntity | null> {
    const document = await this.client.post.findFirst({
      where: {
        id,
      },
      include: {
        comments: true,
        likes: true,
      },
    });

    if (!document) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return this.createEntityFromDocument(document);
  }


  public override async deleteById(id: string): Promise<void> {
    await this.client.post.delete({
      where: {
        id,
      }
    })
  }
}