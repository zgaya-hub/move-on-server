import { MigrationInterface, QueryRunner } from 'typeorm';

export class movieCast1696740263107 implements MigrationInterface {
  name = 'movieCast1696740263107';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`movie_cast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`movie_id\` varchar(36) NULL, \`cast_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movie_cast\` ADD CONSTRAINT \`FK_a6c0ed450412f8365639b5a700b\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movie_cast\` ADD CONSTRAINT \`FK_6c5b33e50d2e1ca6d8250f25740\` FOREIGN KEY (\`cast_id\`) REFERENCES \`cast\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`movie_cast\` DROP FOREIGN KEY \`FK_6c5b33e50d2e1ca6d8250f25740\``);
    await queryRunner.query(`ALTER TABLE \`movie_cast\` DROP FOREIGN KEY \`FK_a6c0ed450412f8365639b5a700b\``);
    await queryRunner.query(`DROP TABLE \`movie_cast\``);
  }
}
