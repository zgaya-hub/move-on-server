import { MigrationInterface, QueryRunner } from "typeorm";

export class MovieCrew1703905047489 implements MigrationInterface {
    name = 'MovieCrew1703905047489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`movie_crew\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`movie_id\` varchar(36) NULL, \`crew_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`movie_crew\` ADD CONSTRAINT \`FK_e11d125b8be76ef5893e7c08b15\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`movie_crew\` ADD CONSTRAINT \`FK_d4a490266a0ed67f49c352baf30\` FOREIGN KEY (\`crew_id\`) REFERENCES \`crew\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie_crew\` DROP FOREIGN KEY \`FK_d4a490266a0ed67f49c352baf30\``);
        await queryRunner.query(`ALTER TABLE \`movie_crew\` DROP FOREIGN KEY \`FK_e11d125b8be76ef5893e7c08b15\``);
        await queryRunner.query(`DROP TABLE \`movie_crew\``);
    }

}
