import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({
    type: 'string',
    description: 'User unique address',
    example: 'user@user.ru',
  })
  public email!: string;

  @ApiProperty({
    type: 'string',
    description: 'User name',
    example: 'Keks',
  })
  public name!: string;

  @ApiProperty({
    type: 'string',
    description: 'User password',
    example: 'abc123456',
  })
  public password!: string;
}
