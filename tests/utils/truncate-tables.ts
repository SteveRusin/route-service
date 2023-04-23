import { DataSource } from 'typeorm';

export async function truncateTables(dataSource: DataSource) {
  for (const entity of dataSource.entityMetadatas) {
    await dataSource.getRepository(entity.name).clear();
  }
}
