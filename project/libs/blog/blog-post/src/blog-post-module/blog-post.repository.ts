import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaClientService } from '@project/blog-models';
import { BlogPost, BlogPostSortType, DEFAULT_PAGE_COUNT, DEFAULT_POST_COUNT_LIMIT, PaginationResult, SortDirection } from '@project/core';
import { BasePostgresRepository } from '@project/data-access';

import { BlogPostEntity } from './blog-post.entity';
import { BlogPostFactory } from './blog-post.factory';
import { BlogPostQuery } from './blog-post.query';

@Injectable()
export class BlogPostRepository extends BasePostgresRepository<BlogPostEntity, BlogPost> {
  constructor(
    entityFactory: BlogPostFactory,
    override readonly client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  private async getPostCount(where: Prisma.PostWhereInput): Promise<number> {
    return this.client.post.count({ where });
  }

  private calculatePostsPage(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
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

  public async find(query?: BlogPostQuery): Promise<PaginationResult<BlogPostEntity | null>> {
    const skip = query?.page && query?.limit ? (query.page - 1) * query.limit : undefined;
    const take = query?.limit;
    const where: Prisma.PostWhereInput = {};
    const orderBy: Prisma.PostOrderByWithRelationInput[] = [];

    switch (query?.sortType) {
      case BlogPostSortType.CommentCount:
        orderBy.push({
          comments: {
            _count: SortDirection.Desc,
          }
        });
        break;

      case BlogPostSortType.LikeCount:
        orderBy.push({
          likes: {
            _count: SortDirection.Desc,
          }
        });
        break;

      default:
        orderBy.push({
          createdAt: SortDirection.Desc,
        });
    }

    const [records, postCount] = await Promise.all([
      this.client.post.findMany({
        // where: {
        //   is
        // },
        orderBy,
        skip,
        take,
        include: {
          _count: {
            select: {
              comments: true,
              likes: true,
            }
          },
        }
      }),
      this.getPostCount(where),
    ]);

    return {
      entities: records.map((record) => {
        return this.createEntityFromDocument({
          ...record,
          likeCount: record._count.likes,
          commentCount: record._count.comments,
        })
      }),
      currentPage: query?.page || DEFAULT_PAGE_COUNT,
      totalPages: this.calculatePostsPage(postCount, take || DEFAULT_POST_COUNT_LIMIT),
      itemsPerPage: take || DEFAULT_POST_COUNT_LIMIT,
      totalItems: postCount,
    }
  }

  public override async deleteById(id: string): Promise<void> {
    await this.client.post.delete({
      where: {
        id,
      }
    })
  }
}