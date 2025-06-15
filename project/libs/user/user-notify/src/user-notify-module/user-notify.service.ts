import { Inject, Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import type { ConfigType } from '@nestjs/config';

import { RabbitRouting } from '@project/core';
import { rabbitConfig } from '@project/user-config';

import { CreateSubscriberDTO } from '../dto/create-subscriber.dto';

@Injectable()
export class UserNotifyService {
  constructor(
    private readonly rabbitClient: AmqpConnection,
    @Inject(rabbitConfig.KEY)
    private readonly rabbitOptions: ConfigType<typeof rabbitConfig>,
  ) {}

  public async registerSubscriber(dto: CreateSubscriberDTO) {
    return this.rabbitClient.publish<CreateSubscriberDTO>(
      this.rabbitOptions.exchange,
      RabbitRouting.AddSubscriber,
      { ...dto }
    );
  }
}