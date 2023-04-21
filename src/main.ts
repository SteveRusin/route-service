import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { ConsoleLogger } from '@nestjs/common';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { APP_CONFIG } from './config';

async function bootstrap() {
  const logger = new ConsoleLogger();
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter({ logger: true }),
    {
      logger,
    },
  );

  await app.listen(APP_CONFIG.PORT, '0.0.0.0', () => {
    logger.log(`App is listening on http://locahost:${APP_CONFIG.PORT}`);
  });
}
bootstrap();
