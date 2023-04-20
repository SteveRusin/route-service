import { Transform } from 'class-transformer';
import { IsInt, Max } from 'class-validator';

export class RouteQuery {
  @IsInt()
  @Transform((params) => parseInt(params.value))
  limit = 100;

  @Max(2_000)
  @IsInt()
  @Transform((params) => parseInt(params.value))
  offset = 0;
}
