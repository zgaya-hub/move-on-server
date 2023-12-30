import { MigrationInterface, QueryRunner } from "typeorm";

export class MediaAdditionalInfo1703905097212 implements MigrationInterface {
    name = 'MediaAdditionalInfo1703905097212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`media_additional_info\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`media_origin_country\` enum ('United States of America', 'Australia', 'Austria', 'Afghanistan', 'Canada', 'China', 'Republic of China', 'France', 'Germany', 'India', 'Indonesia', 'Iran', 'Iraq', 'Italy', 'Japan', 'North korea', 'South korea', 'Mexico', 'Netherlands', 'New zealand', 'Pakistan', 'Russian Federation', 'Singapore', 'Spain', 'Switzer land', 'Thailand', 'Turkey', 'United kingdom', 'Yemen', 'Zimbabwe') NOT NULL DEFAULT 'United kingdom', \`media_original_language\` enum ('English', 'German', 'Persian', 'Chinese', 'French', 'Hindi', 'Indonesian', 'Arabic', 'Italian', 'Japanese', 'Korean', 'Spanish', 'Dutch', 'Urdu', 'Rassian', 'Thai', 'Turkish') NOT NULL DEFAULT 'English', \`media_genre\` enum ('Action', 'Drama', 'Comedy', 'Fantasy', 'Horror', 'Romance', 'Aventure', 'War', 'Biography', 'Super Hero') NOT NULL DEFAULT 'Action', \`media_status\` enum ('In Production', 'Released', 'Post Production', 'On Hold', 'Canceled') NOT NULL DEFAULT 'Released', \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, UNIQUE INDEX \`REL_6441fdce7b41a203dc54f98e57\` (\`movie_id\`), UNIQUE INDEX \`REL_bde49a064a03078713eddc6f8e\` (\`series_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` ADD CONSTRAINT \`FK_6441fdce7b41a203dc54f98e575\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` ADD CONSTRAINT \`FK_bde49a064a03078713eddc6f8e7\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` DROP FOREIGN KEY \`FK_bde49a064a03078713eddc6f8e7\``);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` DROP FOREIGN KEY \`FK_6441fdce7b41a203dc54f98e575\``);
        await queryRunner.query(`DROP TABLE \`media_additional_info\``);
    }

}
