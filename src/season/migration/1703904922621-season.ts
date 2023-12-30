import { MigrationInterface, QueryRunner } from "typeorm";

export class Season1703904922621 implements MigrationInterface {
    name = 'Season1703904922621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`season\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`season_number\` int NOT NULL, \`series_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`season\` ADD CONSTRAINT \`FK_4efcc05beed4bfa3079a3a1a99a\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`season\` DROP FOREIGN KEY \`FK_4efcc05beed4bfa3079a3a1a99a\``);
        await queryRunner.query(`DROP TABLE \`season\``);
    }

}
