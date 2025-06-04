import {
  IsOptional,
  IsString,
  IsNumber,
  Max,
  Min,
  validateOrReject,
} from 'class-validator';

import {
  MONGO_ENV_VALIDATION_MESSAGE,
  MONGO_PORT,
} from '@project/core';

export class MongoCongfiguration {
  @IsString({ message: MONGO_ENV_VALIDATION_MESSAGE.DB_NAME_REQUIRED })
  public name!: string;

  @IsString({ message: MONGO_ENV_VALIDATION_MESSAGE.DB_HOST_REQUIRED })
  public host!: string;

  @IsNumber({}, { message: MONGO_ENV_VALIDATION_MESSAGE.DB_PORT_REQUIRED })
  @Min(MONGO_PORT.MIN)
  @Max(MONGO_PORT.MAX)
  @IsOptional()
  public port: number = MONGO_PORT.DEFAULT;

  @IsString({ message: MONGO_ENV_VALIDATION_MESSAGE.DB_PASSWORD_REQUIRED })
  public password!: string;

  @IsString({ message: MONGO_ENV_VALIDATION_MESSAGE.DB_AUTH_BASE_REQUIRED })
  public authBase!: string;

  public async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
