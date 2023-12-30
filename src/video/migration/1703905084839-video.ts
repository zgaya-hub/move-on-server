import { MigrationInterface, QueryRunner } from 'typeorm';

export class Video1703905084839 implements MigrationInterface {
  name = 'Video1703905084839';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`video\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`manager_id\` varchar(255) NOT NULL, \`video_quality\` enum ('Low', 'Medium', 'High', 'HD 720p', 'QHD 1440p', 'HD 1080p', 'UHD 4K', 'UHD 8K') NOT NULL, \`video_width\` int NOT NULL, \`video_height\` int NOT NULL, \`video_size_in_kb\` int NOT NULL, \`video_mime\` varchar(255) NOT NULL, \`video_run_time\` int NOT NULL, \`is_used\` tinyint NOT NULL DEFAULT 0, \`movie_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, \`trailer_id\` varchar(36) NULL, UNIQUE INDEX \`REL_713d6f4436d5d82b75b0188067\` (\`movie_id\`), UNIQUE INDEX \`REL_13d6f1daa3289f4e3157399590\` (\`episode_id\`), UNIQUE INDEX \`REL_8c7eef99ec7bad4bcc5449e09f\` (\`trailer_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_713d6f4436d5d82b75b01880678\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_13d6f1daa3289f4e3157399590a\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_8c7eef99ec7bad4bcc5449e09f0\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_8c7eef99ec7bad4bcc5449e09f0\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_13d6f1daa3289f4e3157399590a\``);
    await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_713d6f4436d5d82b75b01880678\``);
    await queryRunner.query(`DROP TABLE \`video\``);
  }
}
