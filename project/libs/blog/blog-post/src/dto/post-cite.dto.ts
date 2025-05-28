import { ApiProperty } from '@nestjs/swagger';
import { Equals, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { $Enums } from '@prisma/client';
import { PostCiteContentDTO } from './content/post-cite-content.dto';
import { PostDTO } from './abstract/post.dto';

export class PostCiteDTO extends PostDTO {
  @ApiProperty({
    type: 'string',
    description: 'post type',
    example: 'cite',
  })
  @Equals($Enums.PostType.cite)
  public type!: $Enums.PostType;

  @ValidateNested()
  @IsObject()
  @Type(() => PostCiteContentDTO)
  public content!: PostCiteContentDTO;
}