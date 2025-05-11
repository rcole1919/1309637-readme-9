import { ConfigType, registerAs } from '@nestjs/config';
import { plainToClass } from 'class-transformer';

import { MongoCongfiguration } from './mongo.env';
import { DEFAULT_MONGO_PORT, RADIX } from '@project/core';

async function getDbConfig(): Promise<MongoCongfiguration> {
  const config = plainToClass(MongoCongfiguration, {
    host: process.env.MONGO_HOST,
    name: process.env.MONGO_DB,
    user: process.env.MONGO_USER,
    port: parseInt(process.env.MONGO_PORT || `${DEFAULT_MONGO_PORT}`, RADIX),
    password: process.env.MONGO_PASSWORD,
    authBase: process.env.MONGO_AUTH_BASE,
  });

  await config.validate();

  return config;
}

export default registerAs('db', async(): Promise<ConfigType<typeof getDbConfig>> => {
  return getDbConfig();
});
