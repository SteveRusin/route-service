import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RouteController, HeathCheckController } from './controllers';
import { RouteService } from './services';
import { TYPEORM_CONFIG } from './config';
import { RouteEntity } from './entities';
import { RouteRepository } from './infrastructure';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(TYPEORM_CONFIG),
    TypeOrmModule.forFeature([RouteEntity]),
  ],
  controllers: [RouteController, HeathCheckController],
  providers: [RouteRepository, RouteService],
})
export class AppModule {}
