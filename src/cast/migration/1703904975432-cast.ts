import { MigrationInterface, QueryRunner } from 'typeorm';

export class Cast1703904975432 implements MigrationInterface {
  name = 'Cast1703904975432';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`role\` enum ('Hero', 'Heroine', 'Villain') NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`cast\``);
  }
}
