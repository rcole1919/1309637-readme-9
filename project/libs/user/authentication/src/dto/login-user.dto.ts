import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { AUTH_VALIDATE_MESSAGE } from '@project/core';

export class LoginUserDTO {
  @ApiProperty({
    type: 'string',
    description: 'User unique address',
    example: 'user@user.ru',
  })
  @IsEmail({}, { message: AUTH_VALIDATE_MESSAGE.EMAIL_NOT_VALID })
  public email!: string;

  @ApiProperty({
    type: 'string',
    description: 'User password',
    example: 'abc123456',
  })
  @IsString()
  public password!: string;
}
