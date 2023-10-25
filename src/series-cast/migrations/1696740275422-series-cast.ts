import { MigrationInterface, QueryRunner } from 'typeorm';

export class seriesCast1696740275422 implements MigrationInterface {
  name = 'seriesCast1696740275422';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`series_cast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`series_id\` varchar(36) NULL, \`cast_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series_cast\` ADD CONSTRAINT \`FK_0df029204e4113011c5a7ee3827\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`series_cast\` ADD CONSTRAINT \`FK_18b1b88a5598dff32b53c9b6b2c\` FOREIGN KEY (\`cast_id\`) REFERENCES \`cast\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`series_cast\` DROP FOREIGN KEY \`FK_18b1b88a5598dff32b53c9b6b2c\``);
    await queryRunner.query(`ALTER TABLE \`series_cast\` DROP FOREIGN KEY \`FK_0df029204e4113011c5a7ee3827\``);
    await queryRunner.query(`DROP TABLE \`series_cast\``);
  }
}
