import { ApiProperty } from '@nestjs/swagger';
import { AUTH_VALIDATE_MESSAGE, USER_NAME_LENGTH, USER_PASSWORD_LENGTH } from '@project/core';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    type: 'string',
    description: 'User unique address',
    example: 'user@user.ru',
  })
  @IsEmail({}, { message: AUTH_VALIDATE_MESSAGE.EMAIL_NOT_VALID })
  public email!: string;

  @ApiProperty({
    type: 'string',
    description: 'User name',
    example: 'Keks',
  })
  @IsString()
  @Length(USER_NAME_LENGTH.MIN, USER_NAME_LENGTH.MAX)
  public name!: string;

  @ApiProperty({
    type: 'string',
    description: 'User password',
    example: 'abc123456',
  })
  @IsString()
  @Length(USER_PASSWORD_LENGTH.MIN, USER_PASSWORD_LENGTH.MAX)
  public password!: string;
}
