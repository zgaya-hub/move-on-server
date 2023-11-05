import { MigrationInterface, QueryRunner } from 'typeorm';

export class Episode1698287339993 implements MigrationInterface {
  name = 'Episode1698287339993';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`episode\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`episode_no\` int NOT NULL, \`seasonID\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`episode\` ADD CONSTRAINT \`FK_97be0565b640ce634c95e4a6b7d\` FOREIGN KEY (\`seasonID\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`episode\` DROP FOREIGN KEY \`FK_97be0565b640ce634c95e4a6b7d\``);
    await queryRunner.query(`DROP TABLE \`episode\``);
  }
}
