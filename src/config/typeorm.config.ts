import { join } from 'path';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { APP_CONFIG } from './app.config';

export const TYPEORM_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: APP_CONFIG.DB_HOST,
  database: APP_CONFIG.DATABASE,
  port: APP_CONFIG.DB_PORT,
  username: APP_CONFIG.DB_USER,
  password: APP_CONFIG.DB_PASSWORD,
  entities: [join(__dirname, '../entities/*.entity.{ts,js}')],
  migrations: [join(__dirname, '../migrations/*')],
};
