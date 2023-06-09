import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';

import { RouteService } from '../services';
import { RouteDto, RouteQuery, HttpBadRequest } from '../models';

@Controller('routes')
export class RouteController {
  constructor(private _routeService: RouteService) {}

  @Get()
  @ApiOkResponse({ type: RouteDto })
  @ApiBadRequestResponse({ type: HttpBadRequest })
  @ApiTags('Routes')
  getRoutes(
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    query: RouteQuery,
  ): Promise<RouteDto> {
    return this._routeService.retrieveRouteInformation(query);
  }
}
