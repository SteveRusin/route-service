import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

When('GET routes?offset={int} is called', async function (offset: number) {
  this.response = await this.server.inject({
    method: 'GET',
    url: '/routes',
    query: {
      offset: offset.toString(),
    },
  });
});

Then('response should contain validation error', async function () {
  expect(this.response?.statusCode).equal(400);

  expect((await this.response?.json())?.message).to.include.members([
    'offset must not be greater than 5000',
  ]);
});
