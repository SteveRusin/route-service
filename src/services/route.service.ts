import { Injectable } from '@nestjs/common';

import { RouteDto, RouteQuery } from '../models';
import { RouteRepository } from '../infrastructure';
import { routeEntitiesToRoutes } from '../mappers';

@Injectable()
export class RouteService {
  constructor(private _routeRepository: RouteRepository) {}

  async retrieveRouteInformation(query: RouteQuery): Promise<RouteDto> {
    const [routes, count] = await this._routeRepository.findMany(query);

    return {
      count,
      data: routeEntitiesToRoutes(routes),
    };
  }
}
