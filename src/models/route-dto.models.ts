export class RouteDto {
  constructor(
    public id: number,
    public airline: string,
    public sourceAirport: string,
    public destinationAirport: string,
    public codeShare: string,
    public stops: number,
    public equipment?: string,
  ) {}
}
