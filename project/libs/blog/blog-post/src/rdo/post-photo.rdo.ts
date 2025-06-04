import { ApiProperty } from '@nestjs/swagger';
import { Type, Expose } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostPhotoContentRDO } from './content/post-photo-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostPhotoRDO extends PostRDO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'photo',
  })
  @Expose()
  public type!: $Enums.PostType;

  @Expose()
  @Type(() => PostPhotoContentRDO)
  public content!: PostPhotoContentRDO;
}