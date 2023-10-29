import { MigrationInterface, QueryRunner } from 'typeorm';

export class VideoUpdate21698510717603 implements MigrationInterface {
  name = 'VideoUpdate21698510717603';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`managerId\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`season_id\` varchar(36) NULL`);
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`episode_id\` varchar(36) NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`episode_id\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`season_id\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`managerId\``);
  }
}
