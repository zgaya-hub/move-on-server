import { MigrationInterface, QueryRunner } from "typeorm";

export class MediaAdditionalInfo1698480769190 implements MigrationInterface {
    name = 'MediaAdditionalInfo1698480769190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_36373fa8658b176587f3ea00b7f\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_f4522e65bf0d7d78c8b14ca6318\``);
        await queryRunner.query(`DROP INDEX \`REL_36373fa8658b176587f3ea00b7\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`REL_f4522e65bf0d7d78c8b14ca631\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`video\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD UNIQUE INDEX \`IDX_713d6f4436d5d82b75b0188067\` (\`movie_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD UNIQUE INDEX \`IDX_a4bb8bcf401b40c88c6e7e9901\` (\`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`video\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_713d6f4436d5d82b75b0188067\` ON \`video\` (\`movie_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_a4bb8bcf401b40c88c6e7e9901\` ON \`video\` (\`series_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_713d6f4436d5d82b75b01880678\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_a4bb8bcf401b40c88c6e7e99011\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_a4bb8bcf401b40c88c6e7e99011\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_713d6f4436d5d82b75b01880678\``);
        await queryRunner.query(`DROP INDEX \`REL_a4bb8bcf401b40c88c6e7e9901\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`REL_713d6f4436d5d82b75b0188067\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`video\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP INDEX \`IDX_a4bb8bcf401b40c88c6e7e9901\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP INDEX \`IDX_713d6f4436d5d82b75b0188067\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`video\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f4522e65bf0d7d78c8b14ca631\` ON \`video\` (\`movie_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_36373fa8658b176587f3ea00b7\` ON \`video\` (\`series_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_f4522e65bf0d7d78c8b14ca6318\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_36373fa8658b176587f3ea00b7f\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
