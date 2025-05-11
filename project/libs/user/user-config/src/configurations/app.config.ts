import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

import { DEFAULT_PORT, APP_ENVIRONMENTS, RADIX, ApplicationConfig } from '@project/core';

type Environment = typeof APP_ENVIRONMENTS[number];

const validationSchema = Joi.object({
  environment: Joi.string().valid(...APP_ENVIRONMENTS).required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});

function validateConfig(config: ApplicationConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(`[Application Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): ApplicationConfig {
  const config: ApplicationConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, RADIX),
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
