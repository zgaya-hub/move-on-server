import { MigrationInterface, QueryRunner } from 'typeorm';

export class TrailerCineast1704118951172 implements MigrationInterface {
  name = 'TrailerCineast1704118951172';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`trailer_cineast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`trailer_id\` varchar(36) NULL, \`cineast_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer_cineast\` ADD CONSTRAINT \`FK_cad6c65bff07a0a0e81a7ac2d8f\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer_cineast\` ADD CONSTRAINT \`FK_85fc8402c69224454d6efb5dc33\` FOREIGN KEY (\`cineast_id\`) REFERENCES \`cineast\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`trailer_cineast\` DROP FOREIGN KEY \`FK_85fc8402c69224454d6efb5dc33\``);
    await queryRunner.query(`ALTER TABLE \`trailer_cineast\` DROP FOREIGN KEY \`FK_cad6c65bff07a0a0e81a7ac2d8f\``);
    await queryRunner.query(`DROP TABLE \`trailer_cineast\``);
  }
}
