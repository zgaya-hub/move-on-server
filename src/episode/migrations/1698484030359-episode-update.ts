import { MigrationInterface, QueryRunner } from 'typeorm';

export class EpisodeUpdate1698484030359 implements MigrationInterface {
  name = 'EpisodeUpdate1698484030359';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`title\``);
    await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`release_date\``);
    await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`run_time\``);
    await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`IMDb_rating\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`episode\` ADD \`IMDb_rating\` decimal(3,1) NOT NULL DEFAULT '0.0'`);
    await queryRunner.query(`ALTER TABLE \`episode\` ADD \`run_time\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`episode\` ADD \`release_date\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`episode\` ADD \`title\` varchar(255) NOT NULL`);
  }
}
