import { MigrationInterface, QueryRunner } from 'typeorm';

export class ErrorLog1698287292505 implements MigrationInterface {
  name = 'ErrorLog1698287292505';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`error_log\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`type\` enum ('Validation', 'Other') NOT NULL, \`message\` varchar(255) NOT NULL, \`status_code\` int NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`error_log\``);
  }
}
