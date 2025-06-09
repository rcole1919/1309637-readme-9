import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

import { DEFAULT_PORT, APP_ENVIRONMENTS, RADIX, FileVaultConfig } from '@project/core';

type Environment = typeof APP_ENVIRONMENTS[number];

const validationSchema = Joi.object({
  environment: Joi.string().valid(...APP_ENVIRONMENTS).required(),
  port: Joi.number().port().default(DEFAULT_PORT),
  uploadDirectory: Joi.string().required(),
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
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
