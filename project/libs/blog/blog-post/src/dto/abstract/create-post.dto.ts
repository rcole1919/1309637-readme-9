import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayUnique, IsMongoId } from 'class-validator';

import { MAX_TAGS } from '@project/core';

export abstract class CreatePostDTO {
  @ApiProperty({
    type: 'string',
    description: 'User ID',
    example: '68360ce03db646c6fa89e8d5',
  })
  @IsMongoId()
  public userId!: string;

  @ApiProperty({
    type: 'array',
    description: 'tag list',
    example: 'cat,dog,fox',
  })
  @ArrayMaxSize(MAX_TAGS)
  @ArrayUnique()
  public tags!: string[];
}