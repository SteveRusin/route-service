import { ApiProperty } from '@nestjs/swagger';

export class HttpBadRequest {
  @ApiProperty()
  error!: string;

  @ApiProperty()
  message!: string[];

  @ApiProperty()
  statusCode!: number;
}
