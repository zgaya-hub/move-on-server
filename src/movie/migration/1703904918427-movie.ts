import { MigrationInterface, QueryRunner } from 'typeorm';

export class Movie1703904918427 implements MigrationInterface {
  name = 'Movie1703904918427';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`movie\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`movie_price_in_dollar\` decimal(3,1) NOT NULL DEFAULT '0.0', \`movie_is_free\` tinyint NOT NULL DEFAULT 1, \`manager_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movie\` ADD CONSTRAINT \`FK_6b1a38438f024c95c0e17d8a4fc\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`movie\` DROP FOREIGN KEY \`FK_6b1a38438f024c95c0e17d8a4fc\``);
    await queryRunner.query(`DROP TABLE \`movie\``);
  }
}
