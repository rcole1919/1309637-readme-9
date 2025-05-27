import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@project/blog-models';
import { BlogLikeFactory } from './blog-like.factory';

@Module({
  imports: [PrismaClientModule],
  providers: [BlogLikeFactory],
})
export class BlogLikeModule {}
