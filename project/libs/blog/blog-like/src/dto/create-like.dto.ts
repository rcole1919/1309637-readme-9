import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsUUID } from 'class-validator';

export class CreateLikeDTO {
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
}