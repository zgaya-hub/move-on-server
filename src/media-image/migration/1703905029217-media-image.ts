import { MigrationInterface, QueryRunner } from 'typeorm';

export class MediaImage1703905029217 implements MigrationInterface {
  name = 'MediaImage1703905029217';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`media_image\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`variant\` enum ('Backdrop', 'Thumbnail') NOT NULL DEFAULT 'Thumbnail', \`url\` varchar(255) NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, \`season_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, \`trailer_id\` varchar(36) NULL, UNIQUE INDEX \`REL_d48839527f17d87089bea03324\` (\`movie_id\`), UNIQUE INDEX \`REL_813b087a6975754a074d12561b\` (\`series_id\`), UNIQUE INDEX \`REL_2c05f486685ec3cdd962aa4487\` (\`season_id\`), UNIQUE INDEX \`REL_319efc82c5dc316684abdccec6\` (\`episode_id\`), UNIQUE INDEX \`REL_a550fe23bc65c4f6ca64d3bef5\` (\`trailer_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_image\` ADD CONSTRAINT \`FK_d48839527f17d87089bea033246\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_image\` ADD CONSTRAINT \`FK_813b087a6975754a074d12561be\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_image\` ADD CONSTRAINT \`FK_2c05f486685ec3cdd962aa4487f\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_image\` ADD CONSTRAINT \`FK_319efc82c5dc316684abdccec62\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_image\` ADD CONSTRAINT \`FK_a550fe23bc65c4f6ca64d3bef53\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`media_image\` DROP FOREIGN KEY \`FK_a550fe23bc65c4f6ca64d3bef53\``);
    await queryRunner.query(`ALTER TABLE \`media_image\` DROP FOREIGN KEY \`FK_319efc82c5dc316684abdccec62\``);
    await queryRunner.query(`ALTER TABLE \`media_image\` DROP FOREIGN KEY \`FK_2c05f486685ec3cdd962aa4487f\``);
    await queryRunner.query(`ALTER TABLE \`media_image\` DROP FOREIGN KEY \`FK_813b087a6975754a074d12561be\``);
    await queryRunner.query(`ALTER TABLE \`media_image\` DROP FOREIGN KEY \`FK_d48839527f17d87089bea033246\``);
    await queryRunner.query(`DROP TABLE \`media_image\``);
  }
}
