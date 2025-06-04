import { ApiProperty } from '@nestjs/swagger';
import { Type, Expose } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostCiteContentRDO } from './content/post-cite-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostCiteRDO extends PostRDO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'cite',
  })
  @Expose()
  public type!: $Enums.PostType;

  @Expose()
  @Type(() => PostCiteContentRDO)
  public content!: PostCiteContentRDO;
}