import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRDO {
  @ApiProperty({
    type: 'string',
    description: 'User unique ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id!: string;

  @ApiProperty({
    type: 'string',
    description: 'User unique address',
    example: 'user@user.ru',
  })
  @Expose()
  public email!: string;

  @ApiProperty({
    type: 'string',
    description: 'Access token',
  })
  @Expose()
  public accessToken!: string;
}