import { MigrationInterface, QueryRunner } from 'typeorm';

export class MediaResource1703905023119 implements MigrationInterface {
  name = 'MediaResource1703905023119';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`media_resource\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`s_3_object_key\` text NOT NULL, \`s_3_object_url\` text NOT NULL, \`movie_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, \`trailer_id\` varchar(36) NULL, UNIQUE INDEX \`REL_5ee6196ea25bc2d6d785de322e\` (\`movie_id\`), UNIQUE INDEX \`REL_0dc24c797b98d7eb08362b321a\` (\`episode_id\`), UNIQUE INDEX \`REL_d8a7065b4e446cd783c40d7131\` (\`trailer_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_resource\` ADD CONSTRAINT \`FK_5ee6196ea25bc2d6d785de322e2\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_resource\` ADD CONSTRAINT \`FK_0dc24c797b98d7eb08362b321a7\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_resource\` ADD CONSTRAINT \`FK_d8a7065b4e446cd783c40d71319\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`media_resource\` DROP FOREIGN KEY \`FK_d8a7065b4e446cd783c40d71319\``);
    await queryRunner.query(`ALTER TABLE \`media_resource\` DROP FOREIGN KEY \`FK_0dc24c797b98d7eb08362b321a7\``);
    await queryRunner.query(`ALTER TABLE \`media_resource\` DROP FOREIGN KEY \`FK_5ee6196ea25bc2d6d785de322e2\``);
    await queryRunner.query(`DROP TABLE \`media_resource\``);
  }
}
