import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, Max } from 'class-validator';

export class RouteQuery {
  @ApiPropertyOptional({
    type: 'number',
    default: 100,
  })
  @IsInt()
  @Transform((params) => parseInt(params.value))
  limit = 100;

  @ApiPropertyOptional({
    type: 'number',
    default: 0,
    maximum: 5_000,
  })
  @Max(5_000)
  @IsInt()
  @Transform((params) => parseInt(params.value))
  offset = 0;
}
