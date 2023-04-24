import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { ConsoleLogger } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { APP_CONFIG } from './config';
import { HttpBadRequest } from './models';

export async function bootstrap() {
  const logger = new ConsoleLogger();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
    {
      logger,
      cors: true,
    },
  );

  const config = new DocumentBuilder()
    .setTitle('Route Service')
    .setDescription('Service for managing fly route info')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [HttpBadRequest],
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(APP_CONFIG.PORT, '0.0.0.0', () => {
    logger.log(`App is listening on http://localhost:${APP_CONFIG.PORT}`);

    logger.log(
      `Swagger docs available on http://localhost:${APP_CONFIG.PORT}/api`,
    );
  });

  return app;
}
