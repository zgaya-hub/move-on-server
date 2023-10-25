import { MigrationInterface, QueryRunner } from 'typeorm';

export class externalLink1696741334993 implements MigrationInterface {
  name = 'externalLink1696741334993';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`external_link\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`resource_name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`episode_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, \`movie_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`external_link\` ADD CONSTRAINT \`FK_7c1457beaba3b923bce850c73f1\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`external_link\` ADD CONSTRAINT \`FK_56dee72a4d9abda8106e96a8816\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`external_link\` ADD CONSTRAINT \`FK_0e83d4b713a82cf5826bdf85853\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`external_link\` DROP FOREIGN KEY \`FK_0e83d4b713a82cf5826bdf85853\``);
    await queryRunner.query(`ALTER TABLE \`external_link\` DROP FOREIGN KEY \`FK_56dee72a4d9abda8106e96a8816\``);
    await queryRunner.query(`ALTER TABLE \`external_link\` DROP FOREIGN KEY \`FK_7c1457beaba3b923bce850c73f1\``);
    await queryRunner.query(`DROP TABLE \`external_link\``);
  }
}
