import { ApiProperty } from '@nestjs/swagger';
import { Equals, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostVideoContentDTO } from './content/post-video-content.dto';
import { PostDTO } from './abstract/post.dto';

export class PostVideoDTO extends PostDTO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'video',
  })
  @Equals($Enums.PostType.video)
  public type!: $Enums.PostType;

  @ValidateNested()
  @IsObject()
  @Type(() => PostVideoContentDTO)
  public content!: PostVideoContentDTO;
}