import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CheckAuthGuard } from './guards/check-auth.guard';
import { UsersController } from './users.controller';

import {
  HTTP_CLIENT_MAX_REDIRECTS,
  HTTP_CLIENT_TIMEOUT
} from './app.config';

@Module({
  imports: [
    HttpModule.register({
      timeout: HTTP_CLIENT_TIMEOUT,
      maxRedirects: HTTP_CLIENT_MAX_REDIRECTS,
    }),
  ],
  controllers: [
    UsersController,
  ],
  providers: [CheckAuthGuard],
})
export class AppModule {}
