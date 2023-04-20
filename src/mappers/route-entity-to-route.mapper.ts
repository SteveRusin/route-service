import { RouteEntity } from '../entities';
import { Route } from '../models';

export function routeEntitiesToRoutes(routeEntities: RouteEntity[]): Route[] {
  return routeEntities.map((entity) => ({
    id: entity.id,
    airline: entity.airline,
    codeShare: entity.code_share,
    destinationAirport: entity.destination_airport,
    sourceAirport: entity.source_airport,
    stops: entity.stops,
    equipment: entity.equipment,
  }));
}
