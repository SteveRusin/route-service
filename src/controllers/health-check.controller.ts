import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HeathCheckController {
  @Get()
  async getHealthCheck() {
    return {
      status: 'Ok',
    };
  }
}
