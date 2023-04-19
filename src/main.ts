import { NestFactory } from '@nestjs/core';
import { ConsoleLogger } from '@nestjs/common';

import { AppModule } from './app.module';
import { APP_CONFIG } from './config';

async function bootstrap() {
  const logger = new ConsoleLogger();
  const app = await NestFactory.create(AppModule, {
    logger,
  });

  await app.listen(APP_CONFIG.PORT, '0.0.0.0', () => {
    logger.log(`App is listening on http://locahost:${APP_CONFIG.PORT}`);
  });
}
bootstrap();
