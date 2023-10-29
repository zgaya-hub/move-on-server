import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeasonUpdate1698482185759 implements MigrationInterface {
  name = 'SeasonUpdate1698482185759';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`title\``);
    await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`release_date\``);
    await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`plot_summary\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`season\` ADD \`plot_summary\` text NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`season\` ADD \`release_date\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`season\` ADD \`title\` varchar(255) NOT NULL`);
  }
}
