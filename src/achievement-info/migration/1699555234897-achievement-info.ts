import { MigrationInterface, QueryRunner } from 'typeorm';

export class AchievementInfo1699555234897 implements MigrationInterface {
  name = 'AchievementInfo1699555234897';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`achievement_info\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`media_im_db_rating\` decimal(3,1) NOT NULL DEFAULT '0.0', \`media_om_db_rating\` decimal(3,1) NOT NULL DEFAULT '0.0', \`media_award\` text NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, UNIQUE INDEX \`REL_c4f09c238073858d1f0f201f0f\` (\`movie_id\`), UNIQUE INDEX \`REL_5a936b2575929cf2720b850828\` (\`series_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
    await queryRunner.query(`ALTER TABLE \`achievement_info\` ADD CONSTRAINT \`FK_c4f09c238073858d1f0f201f0f4\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE \`achievement_info\` ADD CONSTRAINT \`FK_5a936b2575929cf2720b850828f\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`achievement_info\` DROP FOREIGN KEY \`FK_5a936b2575929cf2720b850828f\``);
    await queryRunner.query(`ALTER TABLE \`achievement_info\` DROP FOREIGN KEY \`FK_c4f09c238073858d1f0f201f0f4\``);
    await queryRunner.query(`DROP TABLE \`achievement_info\``);
  }
}
