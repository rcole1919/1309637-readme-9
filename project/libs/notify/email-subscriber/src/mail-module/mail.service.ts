import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';

import { Subscriber, EMAIL_ADD_SUBSCRIBER_SUBJECT } from '@project/core';
import { NotifyConfig } from '@project/notify-config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(NotifyConfig.KEY)
    private readonly notifyConfig: ConfigType<typeof NotifyConfig>,
  ) {}

  public async sendNotifyNewSubscriber(subscriber: Subscriber) {
    await this.mailerService.sendMail({
      from: this.notifyConfig.mail.from,
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        user: `${subscriber.name}`,
        email: `${subscriber.email}`,
      }
    })
  }
}