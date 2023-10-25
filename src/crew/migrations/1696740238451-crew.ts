import { MigrationInterface, QueryRunner } from 'typeorm';

export class crew1696740238451 implements MigrationInterface {
  name = 'crew1696740238451';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`crew\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`role\` enum ('Producer', 'Director', 'Writer') NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`crew\``);
  }
}
