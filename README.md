# Route Service

## Project description

This microservice is a part of flight booking project. The aim is to provide API for interaction with flight info information.

## Prerequisite

- Node >= v18
- Docker >=20

## Project installation instructions

1. Clone the project
1. Switch to node v18 using [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/nvm-sh/nvm) or other node version manager of your choice
1. Run `npm ci` command to install dependencies
1. Copy and rename `.env.example` -> `.env`; Content of `.env.example` should work for local environment setup
1. Start local database with `npm run compose:db:up` command
1. Run migrations with `npm run migration:run` command
1. Run `npm run start:dev` to serve application

## Project configuration

Project can be configured using `.env` file for local development and `.env.integration` for integration tests.

## API documentation

1. Start application following [Project installation instructions](#project-installation-instructions)
1. Open swagger docs by navigation to `http://localhost:{APP_PORT}/api`

## Npm scripts

- `npm run build` - builds into dist folder
- `npm run start` - starts application from dist folder
- `npm run test:ci` - run linter and tests. Used by ci environment
- `npm run build:ci` - build artifacts. Used by ci environment
- `npm run start:dev` - starts application in watch mode for development
- `npm run lint:eslint` - run eslint
- `npm run lint` - lint the project using eslint and find circular imports
- `npm run test` - run unit tests
- `npm run find-circular-imports` - find circular imports in project
- `npm run test:integration` - starts integration tests. Uses `.env.integration` configuration
- `npm run compose:test:integration` - runs docker compose for integration tests using `docker-compose.int.yml` file
- `npm run compose:db:up` - starts postgres container using `docker-compose.dev.yml` file
- `npm run compose:db-int:up` - starts postgres container for integration tests using `docker-compose.int.yml` file
- `npm run typeorm:cli` - configures typeorm cli. Expected to be used in combination with other command.
- `npm run migration:create` - creates new migration. E.g `npm run migration:create ./src/migrations/{name_of_migration}`
- `npm run migration:run` - runs migrations defined in `src/migrations`

## Project source code structure:

- src/config - application configurations files
- src/controllers - application HTTP controllers
- src/entities - typeorm database entities
- src/infrastructure - folder for interaction with infrastructure. Contains repositories, api clients etc
- src/mappers - mapper files win format `{model}-to-{model}.mapper.ts`
- src/migrations - folder containing database migration generated by `npm run migration:create` command
- src/models - global interfaces/models used in the application
- src/services - folder containing application business logic
- tests/features - integration tests scenarios and steps definition
- tests/mocks - factory functions for mocks
- tests/utils - tests related helper functions

## Tech Stack

- Project was generated with [NestJS Cli](https://docs.nestjs.com/cli/overview). Refer to NestJS docks for details
- For database communication [typeorm](https://typeorm.io/) is used. [NestJS](https://docs.nestjs.com/techniques/database) has good integration with this ORM.

## Unit Tests

- Unit tests are written in `*.spec.ts` files alongside the entity they are testing.
- Refer to [this](https://github.com/goldbergyoni/javascript-testing-best-practices) documentation for unit test style guide
- Run `npm run test` to kick off jest unit tests

## Integration Tests

- To run int tests in docker run `npm run compose:test:integration`
- To run int tests outside docker you need to start integration image of database by running `npm run compose:db-int:up` followed by `npm run test:integration` command.

## CI/CD

- CD/CD is done using [github action](./.github/workflows/push_main.yml)
