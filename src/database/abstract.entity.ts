import { PrimaryGeneratedColumn } from 'typeorm';

// TODO: add created at & updated at fields
export class AbstractEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
