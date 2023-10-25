import { MigrationInterface, QueryRunner } from 'typeorm';

export class media1696740220608 implements MigrationInterface {
  name = 'media1696740220608';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`media\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`type\` enum ('Trailer', 'Video', 'Full Movie') NOT NULL, \`S3_object_key\` varchar(255) NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, \`season_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media\` ADD CONSTRAINT \`FK_110b5070b38dfb2286944413942\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media\` ADD CONSTRAINT \`FK_695df3c468bdfe066643626ab3c\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media\` ADD CONSTRAINT \`FK_8eb7e3360030a7594a5777b7c78\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media\` ADD CONSTRAINT \`FK_fa20c2cf09c3a2e89456234746d\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_fa20c2cf09c3a2e89456234746d\``);
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_8eb7e3360030a7594a5777b7c78\``);
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_695df3c468bdfe066643626ab3c\``);
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_110b5070b38dfb2286944413942\``);
    await queryRunner.query(`DROP TABLE \`media\``);
  }
}
