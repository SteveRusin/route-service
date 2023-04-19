import { Controller, Get } from '@nestjs/common';

@Controller('routes')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all routes';
  }
}
