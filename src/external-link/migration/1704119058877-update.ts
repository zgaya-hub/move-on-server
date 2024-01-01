import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1704119058877 implements MigrationInterface {
  name = 'Update1704119058877';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`external_link\` ADD \`cineast_id\` varchar(36) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`external_link\` ADD CONSTRAINT \`FK_34dbd85c8f80ce21f3f327f82d7\` FOREIGN KEY (\`cineast_id\`) REFERENCES \`cineast\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`external_link\` DROP FOREIGN KEY \`FK_34dbd85c8f80ce21f3f327f82d7\``);
    await queryRunner.query(`ALTER TABLE \`external_link\` DROP COLUMN \`cineast_id\``);
  }
}
