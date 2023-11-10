import { MigrationInterface, QueryRunner } from 'typeorm';

export class VideoUpdate11699585260982 implements MigrationInterface {
  name = 'VideoUpdate11699585260982';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`is_used\` tinyint NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`is_used\``);
  }
}
