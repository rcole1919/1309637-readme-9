import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export interface JwtConfig {
  accessTokenSecret: string | undefined;
  accessTokenExpiresIn: string | undefined;
}

const validationSchema = Joi.object({
  accessTokenSecret: Joi.string().required(),
  accessTokenExpiresIn: Joi.string().required(),
});

function validateConfig(config: JwtConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(`[User JwtConfig Validation Error]: ${error.message}`);
  }
}

function getConfig(): JwtConfig {
  const config: JwtConfig = {
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    accessTokenExpiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  };

  validateConfig(config);
  return config;
}

export default registerAs('jwt', getConfig);
