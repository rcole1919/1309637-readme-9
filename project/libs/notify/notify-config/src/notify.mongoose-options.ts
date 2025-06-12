import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { getMongoConnectionString } from '@project/helpers';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get('application.db.user') as string,
          password: config.get('application.db.password') as string,
          host: config.get('application.db.host') as string,
          port: config.get('application.db.port') as string,
          authDb: config.get('application.db.authBase') as string,
          dbName: config.get('application.db.name') as string,
        }),
      };
    },
    inject: [ConfigService],
  };
}
