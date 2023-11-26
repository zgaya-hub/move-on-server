import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddObjectUrl1700709349147 implements MigrationInterface {
  name = 'AddObjectUrl1700709349147';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`media_resource\` ADD \`media_s_3_object_url\` text NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`media_resource\` DROP COLUMN \`media_s_3_object_url\``);
  }
}
