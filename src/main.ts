import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { type INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication<AppModule> = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.enableShutdownHooks();

  await app.listen('3000');
}
bootstrap();
