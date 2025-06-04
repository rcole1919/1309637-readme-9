import { Prisma } from '@prisma/client';

export interface LikeFilter {
  postId: string;
  userId: string;
}

export function likeFiltertoPrismaFilter(filter?: LikeFilter): Prisma.LikeWhereInput | undefined {
  if (!filter) {
    return undefined;
  }

  let prismaFilter: Prisma.LikeWhereInput = {};

  if (filter.postId && filter.userId) {
    prismaFilter = {
      postId: filter.postId,
      userId: filter.userId,
    };
  }

  return prismaFilter;
}