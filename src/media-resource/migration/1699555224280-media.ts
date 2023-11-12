import { MigrationInterface, QueryRunner } from 'typeorm';

export class Media1699555224280 implements MigrationInterface {
  name = 'Media1699555224280';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`media_resource\` (\`ID\` varchar(36) NOT NULL,\`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`media_s_3_object_key\` text NOT NULL, \`movie_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, \`trailer_id\` varchar(36) NULL, UNIQUE INDEX \`REL_110b5070b38dfb228694441394\` (\`movie_id\`), UNIQUE INDEX \`REL_fa20c2cf09c3a2e89456234746\` (\`episode_id\`), UNIQUE INDEX \`REL_4655003f19d23390d776f53b65\` (\`trailer_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_resource\` ADD CONSTRAINT \`FK_110b5070b38dfb2286944413942\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_resource\` ADD CONSTRAINT \`FK_fa20c2cf09c3a2e89456234746d\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`media_resource\` ADD CONSTRAINT \`FK_4655003f19d23390d776f53b656\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_4655003f19d23390d776f53b656\``);
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_fa20c2cf09c3a2e89456234746d\``);
    await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_110b5070b38dfb2286944413942\``);
    await queryRunner.query(`DROP TABLE \`media\``);
  }
}
