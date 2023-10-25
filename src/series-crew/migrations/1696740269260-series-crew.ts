import { MigrationInterface, QueryRunner } from 'typeorm';

export class seriesCrew1696740269260 implements MigrationInterface {
  name = 'seriesCrew1696740269260';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`series_crew\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`series_id\` varchar(36) NULL, \`crew_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series_crew\` ADD CONSTRAINT \`FK_dab745718caebd10fd38b391485\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series_crew\` ADD CONSTRAINT \`FK_16c76d66b80dce91259de10d4f5\` FOREIGN KEY (\`crew_id\`) REFERENCES \`crew\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`series_crew\` DROP FOREIGN KEY \`FK_16c76d66b80dce91259de10d4f5\``);
    await queryRunner.query(`ALTER TABLE \`series_crew\` DROP FOREIGN KEY \`FK_dab745718caebd10fd38b391485\``);
    await queryRunner.query(`DROP TABLE \`series_crew\``);
  }
}
