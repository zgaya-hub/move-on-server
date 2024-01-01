import { MigrationInterface, QueryRunner } from 'typeorm';

export class MovieCineast1704118960836 implements MigrationInterface {
  name = 'MovieCineast1704118960836';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`movie_cineast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`movie_id\` varchar(36) NULL, \`cineast_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movie_cineast\` ADD CONSTRAINT \`FK_0b46816850cd12c1fa3af9e352e\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`movie_cineast\` ADD CONSTRAINT \`FK_6248179782f5c07aeb88b5c4a9d\` FOREIGN KEY (\`cineast_id\`) REFERENCES \`cineast\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`movie_cineast\` DROP FOREIGN KEY \`FK_6248179782f5c07aeb88b5c4a9d\``);
    await queryRunner.query(`ALTER TABLE \`movie_cineast\` DROP FOREIGN KEY \`FK_0b46816850cd12c1fa3af9e352e\``);
    await queryRunner.query(`DROP TABLE \`movie_cineast\``);
  }
}
