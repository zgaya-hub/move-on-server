import { MigrationInterface, QueryRunner } from 'typeorm';

export class Trailer1703904934744 implements MigrationInterface {
  name = 'Trailer1703904934744';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`trailer\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`manager_id\` varchar(36) NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, \`season_id\` varchar(36) NULL, UNIQUE INDEX \`REL_88a7052c6b070aa0611f008aa8\` (\`movie_id\`), UNIQUE INDEX \`REL_352268e2ee7e7645e52f16dca6\` (\`series_id\`), UNIQUE INDEX \`REL_0a954fb231e58bca9de6619d62\` (\`season_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_49705d3428def9439832a813401\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_88a7052c6b070aa0611f008aa8e\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_352268e2ee7e7645e52f16dca65\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_0a954fb231e58bca9de6619d627\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_0a954fb231e58bca9de6619d627\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_352268e2ee7e7645e52f16dca65\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_88a7052c6b070aa0611f008aa8e\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_49705d3428def9439832a813401\``);
    await queryRunner.query(`DROP TABLE \`trailer\``);
  }
}
