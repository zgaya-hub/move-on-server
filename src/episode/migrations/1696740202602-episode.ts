import { MigrationInterface, QueryRunner } from 'typeorm';

export class episode1696740202602 implements MigrationInterface {
  name = 'episode1696740202602';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`episode\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`title\` varchar(255) NOT NULL, \`episode_no\` int NOT NULL, \`release_date\` int NOT NULL, \`run_time\` int NOT NULL, \`IMDb_rating\` decimal(3,1) NOT NULL DEFAULT '0.0', \`season_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`episode\` ADD CONSTRAINT \`FK_d8790eefed71394952672828c1c\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`episode\` DROP FOREIGN KEY \`FK_d8790eefed71394952672828c1c\``);
    await queryRunner.query(`DROP TABLE \`episode\``);
  }
}
