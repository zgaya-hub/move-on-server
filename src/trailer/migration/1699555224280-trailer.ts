import { MigrationInterface, QueryRunner } from 'typeorm';

export class Trailer1699555223280 implements MigrationInterface {
  name = 'Trailer1699555223280';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`trailer\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`manager_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
    await queryRunner.query(`ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_49705d3428def9439832a813401\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_49705d3428def9439832a813401\``);
    await queryRunner.query(`DROP TABLE \`trailer\``);
  }
}
