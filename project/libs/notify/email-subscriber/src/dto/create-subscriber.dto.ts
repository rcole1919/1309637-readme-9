import { IsEmail, IsNotEmpty } from 'class-validator';

import { SUBSCRIBER_VALIDATE_MESSAGE } from '@project/core';

export class CreateSubscriberDTO {
  @IsEmail({}, { message: SUBSCRIBER_VALIDATE_MESSAGE.EMAIL_NOT_VALID })
  public email!: string;

  @IsNotEmpty({ message: SUBSCRIBER_VALIDATE_MESSAGE.NAME_IS_EMPTY })
  public name!: string;
}
