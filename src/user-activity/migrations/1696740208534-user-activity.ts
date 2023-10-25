import { MigrationInterface, QueryRunner } from 'typeorm';

export class userActivity1696740208534 implements MigrationInterface {
  name = 'userActivity1696740208534';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user_activity\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`action\` enum ('Download', 'Watch', 'Rate', 'Subscribe', 'Comment', 'Like') NOT NULL, \`status\` enum ('Pass', 'Fail') NOT NULL, \`content_id\` varchar(255) NOT NULL, \`user_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_activity\` ADD CONSTRAINT \`FK_11108754ec780c670440e32baad\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user_activity\` DROP FOREIGN KEY \`FK_11108754ec780c670440e32baad\``);
    await queryRunner.query(`DROP TABLE \`user_activity\``);
  }
}
