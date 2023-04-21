import { ApiProperty, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';

export class Route {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  airline!: string;

  @ApiProperty()
  sourceAirport!: string;

  @ApiProperty()
  destinationAirport!: string;

  @ApiProperty()
  codeShare!: string;

  @ApiProperty()
  stops!: number;

  @ApiProperty()
  equipment?: string;
}

@ApiExtraModels(Route)
export class RouteDto {
  @ApiProperty()
  count!: number;

  @ApiProperty({
    isArray: true,
    items: {
      $ref: getSchemaPath(Route),
    },
  })
  data!: Route[];
}
