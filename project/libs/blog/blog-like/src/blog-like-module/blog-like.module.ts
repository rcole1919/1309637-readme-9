import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@project/blog-models';
import { BlogLikeFactory } from './blog-like.factory';
import { BlogLikeRepository } from './blog-like.repository';
import { BlogLikeService } from './blog-like.service';
import { BlogLikeController } from './blog-like.controller';

@Module({
  imports: [PrismaClientModule],
  providers: [BlogLikeFactory, BlogLikeService, BlogLikeRepository],
  controllers: [BlogLikeController],
  exports: [BlogLikeService]
})
export class BlogLikeModule {}
