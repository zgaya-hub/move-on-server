import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1704124047569 implements MigrationInterface {
  name = 'Update1704124047569';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`image\` ADD \`cineast_id\` varchar(36) NULL`);
    await queryRunner.query(`ALTER TABLE \`image\` ADD UNIQUE INDEX \`IDX_2229ea692624bd598ad683749a\` (\`cineast_id\`)`);
    await queryRunner.query(
      `ALTER TABLE \`image\` ADD CONSTRAINT \`FK_2229ea692624bd598ad683749a8\` FOREIGN KEY (\`cineast_id\`) REFERENCES \`cineast\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`image\` DROP INDEX \`IDX_2229ea692624bd598ad683749a\``);
    await queryRunner.query(`ALTER TABLE \`image\` DROP COLUMN \`cineast_id\``);
  }
}
