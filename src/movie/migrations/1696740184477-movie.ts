import { MigrationInterface, QueryRunner } from 'typeorm';

export class movie1696740184477 implements MigrationInterface {
  name = 'movie1696740184477';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`movie\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`price\` decimal(3,1) NOT NULL DEFAULT '0.0', \`is_free\` tinyint NOT NULL DEFAULT 1, \`manager_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movie\` ADD CONSTRAINT \`FK_6b1a38438f024c95c0e17d8a4fc\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`movie\` DROP FOREIGN KEY \`FK_6b1a38438f024c95c0e17d8a4fc\``);
    await queryRunner.query(`DROP TABLE \`movie\``);
  }
}
