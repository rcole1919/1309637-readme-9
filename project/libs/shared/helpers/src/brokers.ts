import { ConfigService } from '@nestjs/config';
import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq';

import { getRabbitMQConnectionString } from './common';

export function getRabbitMQOptions(optionSpace: string) {
  return {
    useFactory: async (config: ConfigService): Promise<RabbitMQConfig> => ({
      exchanges: [
        {
          name: config.get(`${optionSpace}.queue`) as string,
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
