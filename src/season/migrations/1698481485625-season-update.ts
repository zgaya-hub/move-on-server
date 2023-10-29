import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeasonUpdate1698481485625 implements MigrationInterface {
  name = 'SeasonUpdate1698481485625';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`title\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`season\` ADD \`title\` varchar(255) NOT NULL`);
  }
}
