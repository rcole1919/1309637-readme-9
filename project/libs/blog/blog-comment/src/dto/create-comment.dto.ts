import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDTO {
  @ApiProperty({
    type: 'string',
    description: 'Blog post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  public postId!: string;

  @ApiProperty({
    type: 'string',
    description: 'User ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  public userId!: string;

  @ApiProperty({
    type: 'string',
    description: 'Comment message',
    example: 'Long text',
  })
  public message!: string;
}