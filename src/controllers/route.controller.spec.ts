import { RouteService } from '../services/route.service';
import { createStubInstance } from '../../test/utils';

import { RouteController } from './route.controller';

describe('RouteController', () => {
  let routeController: RouteController;
  let routeServiceStub: jest.MockedObject<RouteService>;

  beforeEach(() => {
    routeServiceStub = createStubInstance(RouteService);
    routeController = new RouteController(routeServiceStub);
  });

  it('Should call route service on incoming request', () => {
    routeController.getRoutes({
      limit: 0,
      offset: 0,
    });

    expect(routeServiceStub.retrieveRouteInformation).toHaveBeenCalledTimes(1);
  });
});
