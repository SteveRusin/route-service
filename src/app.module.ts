import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CatsController } from './controllers';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CatsController],
  providers: [],
})
export class AppModule {}
