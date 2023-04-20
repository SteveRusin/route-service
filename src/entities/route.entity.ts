import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'routes' })
export class RouteEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'text',
  })
  airline!: string;

  @Column({
    type: 'text',
  })
  source_airport!: string;

  @Column({
    type: 'text',
  })
  destination_airport!: string;

  @Column({
    type: 'text',
  })
  code_share!: string;

  @Column({
    type: 'int',
  })
  stops!: number;

  @Column({
    type: 'text',
  })
  equipment?: string;
}
