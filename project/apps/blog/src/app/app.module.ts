import { Module } from '@nestjs/common';

import { BlogLikeModule } from '@project/blog-like';
import { BlogCommentModule } from '@project/blog-comment';
import { BlogPostModule } from '@project/blog-post';

@Module({
  imports: [BlogLikeModule, BlogCommentModule, BlogPostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
