import { Module } from '@nestjs/common';

import { BlogLikeModule } from '@project/blog-like';
import { BlogCommentModule } from '@project/blog-comment';

@Module({
  imports: [BlogLikeModule, BlogCommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
