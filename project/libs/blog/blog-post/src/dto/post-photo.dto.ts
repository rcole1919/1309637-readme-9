import { ApiProperty } from '@nestjs/swagger';
import { Equals, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostPhotoContentDTO } from './content/post-photo-content.dto';
import { PostDTO } from './abstract/post.dto';

export class PostPhotoDTO extends PostDTO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'photo',
  })
  @Equals($Enums.PostType.photo)
  public type!: $Enums.PostType;

  @ValidateNested()
  @IsObject()
  @Type(() => PostPhotoContentDTO)
  public content!: PostPhotoContentDTO;
}