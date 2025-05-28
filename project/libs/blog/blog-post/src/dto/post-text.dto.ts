import { ApiProperty } from '@nestjs/swagger';
import { Equals, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostTextContentDTO } from './content/post-text-content.dto';
import { PostDTO } from './abstract/post.dto';

export class PostTextDTO extends PostDTO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'text',
  })
  @Equals($Enums.PostType.text)
  public type!: $Enums.PostType;

  @ValidateNested()
  @IsObject()
  @Type(() => PostTextContentDTO)
  public content!: PostTextContentDTO;
}