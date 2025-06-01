import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRDO {
  @ApiProperty({
    type: 'string',
    description: 'Comment unique ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id!: string;

  @ApiProperty({
    type: 'string',
    description: 'Comment message text',
    example: 'Lorem ipsum',
  })
  @Expose()
  public message!: string;

  @ApiProperty({
    type: 'string',
    description: 'Post ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public postId!: string;

  @ApiProperty({
    type: 'string',
    description: 'Author ID',
    example: '68360ce03db646c6fa89e8d5',
  })
  @Expose()
  public userId!: string;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    description: 'Comment create date',
    example: '2025-05-28T12:00:00Z',
  })
  @Expose()
  public createdAt!: Date;
}