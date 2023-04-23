import './world.models';
import {
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  Before,
} from '@cucumber/cucumber';
import { DataSource } from 'typeorm';

import { bootstrap } from '../../src/bootstrap';
import { truncateTables } from '../utils';

const app = bootstrap();

BeforeAll(async () => {
  const server = await app;

  const dataSource = server.get(DataSource);

  await truncateTables(dataSource);
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
