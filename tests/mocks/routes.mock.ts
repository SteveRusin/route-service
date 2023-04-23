import { RouteEntity } from '../../src/entities';

type RouteEntityNoId = Omit<RouteEntity, 'id'>;

export const getRouteEntityMock1 = (): RouteEntityNoId => ({
  code_share: '',
  source_airport: 'ASF',
  equipment: 'CR2',
  stops: 0,
  airline: '2B',
  destination_airport: 'MRV',
});

export const getRouteEntityMock2 = (): RouteEntityNoId => ({
  code_share: '',
  source_airport: 'NJC',
  equipment: 'CR2',
  stops: 0,
  airline: '2B',
  destination_airport: 'UUA',
});

export const getRouteEntityMock3 = (): RouteEntityNoId => ({
  code_share: '',
  source_airport: 'COO',
  equipment: 'M87',
  stops: 0,
  airline: '2J',
  destination_airport: 'OUA',
});

export const getRouteEntityMock4 = (): RouteEntityNoId => ({
  code_share: '',
  source_airport: 'OUA',
  equipment: 'M87',
  stops: 0,
  airline: '2J',
  destination_airport: 'COO',
});

export const getRouteEntityMock5 = (): RouteEntityNoId => ({
  code_share: '',
  source_airport: 'MNL',
  equipment: '320',
  stops: 0,
  airline: '2P',
  destination_airport: 'LGP',
});
