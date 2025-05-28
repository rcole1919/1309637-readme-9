import { ApiProperty } from '@nestjs/swagger';
import { Type, Expose } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostVideoContentRDO } from './content/post-video-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostVideoRDO extends PostRDO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'video',
  })
  @Expose()
  public type!: $Enums.PostType;

  @Expose()
  @Type(() => PostVideoContentRDO)
  public content!: PostVideoContentRDO;
}