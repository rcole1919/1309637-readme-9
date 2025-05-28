import { ApiProperty } from '@nestjs/swagger';
import { Equals, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostLinkContentDTO } from './content/post-link-content.dto';
import { PostDTO } from './abstract/post.dto';

export class PostLinkDTO extends PostDTO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'link',
  })
  @Equals($Enums.PostType.link)
  public type!: $Enums.PostType;

  @ValidateNested()
  @IsObject()
  @Type(() => PostLinkContentDTO)
  public content!: PostLinkContentDTO;
}