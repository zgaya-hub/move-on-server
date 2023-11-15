import { MigrationInterface, QueryRunner } from 'typeorm';

export class VideoUpdate21699594431558 implements MigrationInterface {
  name = 'VideoUpdate21699594431558';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` CHANGE \`is_used\` \`is_used\` tinyint NOT NULL DEFAULT 0`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` CHANGE \`is_used\` \`is_used\` tinyint NOT NULL`);
  }
}
