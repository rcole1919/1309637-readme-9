import { ConfigService } from '@nestjs/config';

import { getRabbitMQConnectionString } from './common';

export function getRabbitMQOptions(optionSpace: string) {
  return {
    useFactory: async (config: ConfigService) => ({
      exchanges: [
        {
          name: config.get<string>(`${optionSpace}.queue`),
          type: 'direct',
        }
      ],
      uri: getRabbitMQConnectionString({
        host: config.get(`${optionSpace}.host`) as string,
        password: config.get(`${optionSpace}.password`) as string,
        user: config.get(`${optionSpace}.user`) as string,
        port: config.get(`${optionSpace}.port`) as string,
      }),
      connectionInitOptions: { wait: false },
      enableControllerDiscovery: true,
    }),
    inject: [ConfigService],
  };
}
