import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
  @ApiProperty({
    type: 'string',
  })
  public email!: string;

  @ApiProperty({
    type: 'string',
  })
  public password!: string;
}
