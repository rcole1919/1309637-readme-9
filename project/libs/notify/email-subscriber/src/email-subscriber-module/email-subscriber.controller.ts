import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

import { RabbitRouting } from '@project/core';
import { getConfig } from '@project/notify-config';

import { EmailSubscriberService } from './email-subscriber.service';
import { CreateSubscriberDTO } from '../dto/create-subscriber.dto';
import { MailService } from '../mail-module/mail.service';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly subscriberService: EmailSubscriberService,
    private readonly mailService: MailService,
  ) {}

  @RabbitSubscribe({
    exchange: getConfig().rabbit.exchange,
    routingKey: RabbitRouting.AddSubscriber,
    queue: getConfig().rabbit.queue,
  })
  public async create(subscriber: CreateSubscriberDTO) {
    this.subscriberService.addSubscriber(subscriber);
    this.mailService.sendNotifyNewSubscriber(subscriber);
  }
}