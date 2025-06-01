import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRDO {
  @ApiProperty({
    type: 'string',
    description: 'User unique ID',
    example: '68360ce03db646c6fa89e8d5',
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