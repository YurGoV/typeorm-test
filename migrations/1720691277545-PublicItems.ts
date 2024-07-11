// TODO: fix - migrations not work with
// import { AbstractEntity } from 'src/database/abstract.entity';
// but work with
// import { AbstractEntity } from '../../src/database/abstract.entity';

import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1687301066339 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1687301066339.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('UPDATE item SET public = false');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
  }
}
// import { MigrationInterface, QueryRunner } from "typeorm";

// export class PublicItems1720691277545 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
