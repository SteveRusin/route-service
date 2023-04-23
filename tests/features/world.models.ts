import '@cucumber/cucumber';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { Response as LightMyRequestResponse } from 'light-my-request';

declare module '@cucumber/cucumber' {
  interface IWorld {
    server: NestFastifyApplication;
    response?: LightMyRequestResponse;
  }
}
