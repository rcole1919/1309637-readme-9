import { ApiProperty } from '@nestjs/swagger';
import { Type, Expose } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostLinkContentRDO } from './content/post-link-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostLinkRDO extends PostRDO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'link',
  })
  @Expose()
  public type!: $Enums.PostType;

  @Expose()
  @Type(() => PostLinkContentRDO)
  public content!: PostLinkContentRDO;
}