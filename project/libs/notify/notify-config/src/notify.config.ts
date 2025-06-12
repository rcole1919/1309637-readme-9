import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

import {
  DEFAULT_SERVICE_PORT,
  DEFAULT_RABBIT_PORT,
  APP_ENVIRONMENTS,
  MONGO_PORT,
  RADIX,
  NotifyConfig,
} from '@project/core';

type Environment = typeof APP_ENVIRONMENTS[number];

const validationSchema = Joi.object({
  environment: Joi.string().valid(...APP_ENVIRONMENTS).required(),
  port: Joi.number().port().default(DEFAULT_SERVICE_PORT),
  db: Joi.object({
    host: Joi.string().valid().hostname(),
    port: Joi.number().port(),
    name: Joi.string().required(),
    user: Joi.string().required(),
    password: Joi.string().required(),
    authBase: Joi.string().required(),
  }),
  rabbit: Joi.object({
    host: Joi.string().valid().hostname().required(),
    password: Joi.string().required(),
    port: Joi.number().port().default(DEFAULT_RABBIT_PORT),
    user: Joi.string().required(),
    queue: Joi.string().required(),
    exchange: Joi.string().required(),
  })
});

function validateConfig(config: NotifyConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Notify Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): NotifyConfig {
  const config: NotifyConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_SERVICE_PORT}`, RADIX),
    db: {
      host: process.env.MONGO_HOST as string,
      port: parseInt(process.env.MONGO_PORT ?? MONGO_PORT.DEFAULT.toString(), RADIX),
      name: process.env.MONGO_DB as string,
      user: process.env.MONGO_USER as string,
      password: process.env.MONGO_PASSWORD as string,
      authBase: process.env.MONGO_AUTH_BASE as string,
    },
    rabbit: {
      host: process.env.RABBIT_HOST as string,
      password: process.env.RABBIT_PASSWORD as string,
      port: parseInt(process.env.RABBIT_PORT ?? DEFAULT_RABBIT_PORT.toString(), RADIX),
      user: process.env.RABBIT_USER as string,
      queue: process.env.RABBIT_QUEUE as string,
      exchange: process.env.RABBIT_EXCHANGE as string,
    }
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
