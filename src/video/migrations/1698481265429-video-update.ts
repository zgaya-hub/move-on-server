import { MigrationInterface, QueryRunner } from 'typeorm';

export class VideoUpdate1698481265429 implements MigrationInterface {
  name = 'VideoUpdate1698481265429';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`run_time\` int NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`run_time\``);
  }
}
