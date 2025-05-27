import { Module } from '@nestjs/common';

import { BlogLikeModule } from '@project/blog-like';

@Module({
  imports: [BlogLikeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
