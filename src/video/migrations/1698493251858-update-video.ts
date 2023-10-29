import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateVideo1698493251858 implements MigrationInterface {
  name = 'UpdateVideo1698493251858';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`size_in_kb\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`video\` ADD \`mime\` varchar(255) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`mime\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`size_in_kb\``);
  }
}
