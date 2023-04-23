import { When, Then, Given } from '@cucumber/cucumber';
import { expect } from 'chai';
import { DataSource } from 'typeorm';

import { RouteEntity } from '../../../src/entities';
import {
  getRouteEntityMock1,
  getRouteEntityMock2,
  getRouteEntityMock3,
  getRouteEntityMock4,
  getRouteEntityMock5,
} from '../../mocks';
import { RouteDto } from '../../../src/models';

Given('Database contains 5 items with sequential id', async function () {
  const dataSource = this.server.get(DataSource);

  const routeEntityRepository = dataSource.getRepository(RouteEntity);

  routeEntityRepository.insert([
    getRouteEntityMock1(),
    getRouteEntityMock2(),
    getRouteEntityMock3(),
    getRouteEntityMock4(),
    getRouteEntityMock5(),
  ]);
});

When(
  'GET routes?offset={int}&limit={int} is called',
  async function (offset: number, limit: number) {
    this.response = await this.server.inject({
      method: 'GET',
      url: '/routes',
      query: {
        offset: offset.toString(),
        limit: limit.toString(),
      },
    });
  },
);

Then('response should contain validation error', async function () {
  expect(this.response?.statusCode).equal(400);

  expect((await this.response?.json())?.message).to.include.members([
    'offset must not be greater than 5000',
  ]);
});

Then('response should contain first 3 items', async function () {
  expect(this.response?.statusCode).equal(200);

  const body: RouteDto | undefined = await this.response?.json();

  expect(body?.count).equal(5);
  expect(body?.data.length).equal(3);
});
