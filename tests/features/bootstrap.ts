import './world.models';
import {
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  Before,
} from '@cucumber/cucumber';

import { bootstrap } from '../../src/bootstrap';

const app = bootstrap();

BeforeAll(async () => {
  await app;
});

Before(async function () {
  const server = await app;

  this.server = server;
});

AfterAll(async () => {
  const server = await app;

  await server.close();
});

setDefaultTimeout(30_000);
