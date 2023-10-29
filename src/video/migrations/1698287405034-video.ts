import { MigrationInterface, QueryRunner } from 'typeorm';

export class Video1698287405034 implements MigrationInterface {
  name = 'Video1698287405034';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`video\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`quality\` enum ('Low', 'Medium', 'High', 'HD 720p', 'HD 1080p', 'QHD 1440p', 'UHD 4K', 'UHD 8K') NOT NULL, \`width\` int NOT NULL, \`height\` int NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, UNIQUE INDEX \`unique_movie_series\` (\`movie_id\`, \`series_id\`), UNIQUE INDEX \`REL_f4522e65bf0d7d78c8b14ca631\` (\`movie_id\`), UNIQUE INDEX \`REL_36373fa8658b176587f3ea00b7\` (\`series_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_f4522e65bf0d7d78c8b14ca6318\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_36373fa8658b176587f3ea00b7f\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_36373fa8658b176587f3ea00b7f\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_f4522e65bf0d7d78c8b14ca6318\``);
    await queryRunner.query(`DROP TABLE \`video\``);
  }
}
