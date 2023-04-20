import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { RouteEntity } from '../entities';
import { RouteQuery } from '../models';

@Injectable()
export class RouteRepository {
  constructor(
    @InjectRepository(RouteEntity)
    private _route: Repository<RouteEntity>,
  ) {}

  findMany({ limit, offset }: RouteQuery) {
    return this._route
      .createQueryBuilder('route')
      .limit(limit)
      .offset(offset)
      .getManyAndCount();
  }
}
