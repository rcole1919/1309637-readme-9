import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

import {
  DEFAULT_PORT,
  MONGO_PORT,
  APP_ENVIRONMENTS,
  RADIX,
  FileVaultConfig,
} from '@project/core';

type Environment = typeof APP_ENVIRONMENTS[number];

const validationSchema = Joi.object({
  environment: Joi.string().valid(...APP_ENVIRONMENTS).required(),
  port: Joi.number().port().default(DEFAULT_PORT),
  uploadDirectory: Joi.string().required(),
  serveRoot: Joi.string().required(),
  db: {
    host: Joi.string().valid().hostname(),
    port: Joi.number().port(),
    user: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    authBase: Joi.string().required(),
  }
});

function validateConfig(config: FileVaultConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(`[FileVault Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): FileVaultConfig {
  const config: FileVaultConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, RADIX),
    uploadDirectory: process.env.UPLOAD_DIRECTORY_PATH as string,
    serveRoot: process.env.SERVE_ROOT as string,
    db: {
      host: process.env.MONGO_HOST as string,
      port: parseInt(process.env.MONGO_PORT ?? MONGO_PORT.DEFAULT.toString(), 10),
      name: process.env.MONGO_DB as string,
      user: process.env.MONGO_USER as string,
      password: process.env.MONGO_PASSWORD as string,
      authBase: process.env.MONGO_AUTH_BASE as string,
    }
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
