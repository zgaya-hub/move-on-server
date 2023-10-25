import { MigrationInterface, QueryRunner } from 'typeorm';

export class manager1696740166166 implements MigrationInterface {
  name = 'manager1696740166166';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`manager\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`account_status\` enum ('Active', 'In Active', 'Suspended', 'Closed') NOT NULL, \`last_login\` int NULL, PRIMARY KEY (\`ID\`, \`email\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`manager\``);
  }
}
