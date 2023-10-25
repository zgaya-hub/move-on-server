import { MigrationInterface, QueryRunner } from 'typeorm';

export class managerActivity1696740214602 implements MigrationInterface {
  name = 'managerActivity1696740214602';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`manager_activity\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`action\` enum ('uploaded', 'movie-uploading') NOT NULL, \`status\` enum ('Pass', 'Fail') NOT NULL, \`content_id\` varchar(255) NOT NULL, \`manager_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`manager_activity\` ADD CONSTRAINT \`FK_92fc71aeb2ad7c46577fa31d963\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`manager_activity\` DROP FOREIGN KEY \`FK_92fc71aeb2ad7c46577fa31d963\``);
    await queryRunner.query(`DROP TABLE \`manager_activity\``);
  }
}
