import { MigrationInterface, QueryRunner } from 'typeorm';

export class LinkMedia1700709501479 implements MigrationInterface {
  name = 'LinkMedia1700709501479';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`trailer\` ADD \`movie_id\` varchar(36) NULL`);
    await queryRunner.query(`ALTER TABLE \`trailer\` ADD \`series_id\` varchar(36) NULL`);
    await queryRunner.query(`ALTER TABLE \`trailer\` ADD \`season_id\` varchar(36) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_88a7052c6b070aa0611f008aa8e\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_352268e2ee7e7645e52f16dca65\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_0a954fb231e58bca9de6619d627\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_0a954fb231e58bca9de6619d627\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_352268e2ee7e7645e52f16dca65\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_88a7052c6b070aa0611f008aa8e\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP COLUMN \`season_id\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP COLUMN \`series_id\``);
    await queryRunner.query(`ALTER TABLE \`trailer\` DROP COLUMN \`movie_id\``);
  }
}
