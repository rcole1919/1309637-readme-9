import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayUnique } from 'class-validator';

import { MAX_TAGS } from '@project/core';

export abstract class PostDTO {
  @ApiProperty({
    type: 'string',
    description: 'User ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
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