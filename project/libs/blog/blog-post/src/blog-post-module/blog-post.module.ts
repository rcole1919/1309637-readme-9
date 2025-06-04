import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@project/blog-models';
import { BlogPostFactory } from './blog-post.factory';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';

@Module({
  imports: [PrismaClientModule],
  providers: [BlogPostFactory, BlogPostService, BlogPostRepository],
  controllers: [BlogPostController],
  exports: [BlogPostService]
})
export class BlogPostModule {}
