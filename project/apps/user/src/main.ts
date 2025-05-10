import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const GLOBAL_PREFIX = 'api';
const PORT = process.env.PORT || '3000';

const isDevelopment = process.env.NODE_ENV === 'development';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  // const port = process.env.PORT || 3000;
  // await app.listen(port);
  app.setGlobalPrefix(GLOBAL_PREFIX);

  if (isDevelopment) {
    const config = new DocumentBuilder()
      .setTitle('User-сервис')
      .setDescription('Описание User-сервиса')
      .setVersion('1.0')
      .addTag('user')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(GLOBAL_PREFIX, app, document);
  }

  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/${GLOBAL_PREFIX}`);
}

bootstrap();
