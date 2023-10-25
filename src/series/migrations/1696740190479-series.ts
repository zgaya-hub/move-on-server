import { MigrationInterface, QueryRunner } from 'typeorm';

export class series1696740190479 implements MigrationInterface {
  name = 'series1696740190479';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`series\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`price\` decimal(3,1) NOT NULL DEFAULT '0.0', \`is_free\` tinyint NOT NULL DEFAULT 1, \`manager_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series\` ADD CONSTRAINT \`FK_c4724d5bb928c42489e17005c17\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`series\` DROP FOREIGN KEY \`FK_c4724d5bb928c42489e17005c17\``);
    await queryRunner.query(`DROP TABLE \`series\``);
  }
}
