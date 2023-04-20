import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';

import { RouteService } from '../services';
import { RouteDto, RouteQuery } from '../models';

// todo add swagger
@Controller('routes')
export class CatsController {
  constructor(private _routeService: RouteService) {}

  @Get()
  getRoutes(
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    query: RouteQuery,
  ): Promise<RouteDto[]> {
    return this._routeService.retrieveRouteInformation(query);
  }
}
