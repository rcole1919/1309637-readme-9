import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogUserModule } from '@project/blog-user';
import { AuthenticationModule } from '@project/authentication';
import { UserConfigModule, getMongooseOptions } from '@project/user-config';
import { UserNotifyModule } from '@project/user-notify';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    UserConfigModule,
    MongooseModule.forRootAsync(
      getMongooseOptions(),
    ),
    UserNotifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
