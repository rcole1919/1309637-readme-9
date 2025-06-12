import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mongoConfig from '../configurations/mongodb/mongo.config';
import applicationConfig from '../configurations/app.config';
import jwtConfig from '../configurations/jwt.config';
import rabbitConfig from '../configurations/rabbit.config';

const ENV_USER_FILE_PATH = 'apps/user/user.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [applicationConfig, mongoConfig, jwtConfig, rabbitConfig],
      envFilePath: ENV_USER_FILE_PATH,
    })
  ],
})
export class UserConfigModule {}
