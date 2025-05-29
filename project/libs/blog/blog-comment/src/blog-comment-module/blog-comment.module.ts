import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@project/blog-models';
import { BlogCommentFactory } from './blog-comment.factory';
import { BlogCommentRepository } from './blog-comment.repository';
import { BlogCommentService } from './blog-comment.service';
import { BlogCommentController } from './blog-comment.controller';

@Module({
  imports: [PrismaClientModule],
  providers: [BlogCommentFactory, BlogCommentService, BlogCommentRepository],
  controllers: [BlogCommentController],
  exports: [BlogCommentService, BlogCommentFactory]
})
export class BlogCommentModule {}
