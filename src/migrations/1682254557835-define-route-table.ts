import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefineRouteTable1682254557835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/* sql */ `
      CREATE TABLE IF NOT EXISTS ROUTES (
      ID SERIAL PRIMARY KEY,
      AIRLINE VARCHAR(50),
      SOURCE_AIRPORT VARCHAR(50),
      DESTINATION_AIRPORT VARCHAR(50),
      CODE_SHARE VARCHAR(50),
      STOPS NUMERIC,
      EQUIPMENT VARCHAR(50),
      UNIQUE(AIRLINE, SOURCE_AIRPORT, DESTINATION_AIRPORT, CODE_SHARE, EQUIPMENT, STOPS)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/* sql */ `
      DROP TABLE IF EXISTS ROUTES;
    `);
  }
}
