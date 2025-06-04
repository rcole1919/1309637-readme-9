import { ApiProperty } from '@nestjs/swagger';
import { Type, Expose } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostTextContentRDO } from './content/post-text-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostTextRDO extends PostRDO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'text',
  })
  @Expose()
  public type!: $Enums.PostType;

  @Expose()
  @Type(() => PostTextContentRDO)
  public content!: PostTextContentRDO;
}