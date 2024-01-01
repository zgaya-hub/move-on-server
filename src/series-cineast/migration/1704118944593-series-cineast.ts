import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeriesCineast1704118944593 implements MigrationInterface {
  name = 'SeriesCineast1704118944593';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`series_cineast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`series_id\` varchar(36) NULL, \`cineast_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series_cineast\` ADD CONSTRAINT \`FK_7923814b17b11268762f98d1342\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series_cineast\` ADD CONSTRAINT \`FK_5066074f809f0bb3fd87527216a\` FOREIGN KEY (\`cineast_id\`) REFERENCES \`cineast\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`series_cineast\` DROP FOREIGN KEY \`FK_5066074f809f0bb3fd87527216a\``);
    await queryRunner.query(`ALTER TABLE \`series_cineast\` DROP FOREIGN KEY \`FK_7923814b17b11268762f98d1342\``);
    await queryRunner.query(`DROP TABLE \`series_cineast\``);
  }
}
