import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsUUID, IsString, Length } from 'class-validator';
import { COMMENT_TEXT_LENGTH } from '@project/core';

export class CreateCommentDTO {
  @ApiProperty({
    type: 'string',
    description: 'Blog post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @IsUUID()
  public postId!: string;

  @ApiProperty({
    type: 'string',
    description: 'User ID',
    example: '68360ce03db646c6fa89e8d5',
  })
  @IsMongoId()
  public userId!: string;

  @ApiProperty({
    type: 'string',
    description: 'Comment message',
    example: 'Long text',
  })
  @IsString()
  @Length(COMMENT_TEXT_LENGTH.MIN, COMMENT_TEXT_LENGTH.MAX)
  public message!: string;
}