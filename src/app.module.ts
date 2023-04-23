import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RouteController, HeathCheckController } from './controllers';
import { RouteService } from './services';
import { APP_CONFIG } from './config';
import { RouteEntity } from './entities';
import { RouteRepository } from './infrastructure';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: APP_CONFIG.DB_HOST,
      database: APP_CONFIG.DATABASE,
      port: APP_CONFIG.DB_PORT,
      username: APP_CONFIG.DB_USER,
      password: APP_CONFIG.DB_PASSWORD,
      entities: [RouteEntity],
    }),
    TypeOrmModule.forFeature([RouteEntity]),
  ],
  controllers: [RouteController, HeathCheckController],
  providers: [RouteRepository, RouteService],
})
export class AppModule {}
