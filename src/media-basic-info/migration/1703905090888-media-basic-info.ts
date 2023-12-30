import { MigrationInterface, QueryRunner } from "typeorm";

export class MediaBasicInfo1703905090888 implements MigrationInterface {
    name = 'MediaBasicInfo1703905090888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`media_basic_info\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`media_title\` varchar(255) NOT NULL, \`media_plot_summary\` text NOT NULL, \`media_release_date\` bigint NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, \`season_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, \`trailer_id\` varchar(36) NULL, UNIQUE INDEX \`REL_d12e393362bc829c473bc07b75\` (\`movie_id\`), UNIQUE INDEX \`REL_bd19b3b20b752ebc3ef8c88fbc\` (\`series_id\`), UNIQUE INDEX \`REL_7002d0d05bc530d2302bc714c1\` (\`season_id\`), UNIQUE INDEX \`REL_4c17502a3e6020a2c17262b20e\` (\`episode_id\`), UNIQUE INDEX \`REL_e3125ce0c8214a05954160d8e3\` (\`trailer_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_d12e393362bc829c473bc07b75a\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_bd19b3b20b752ebc3ef8c88fbcf\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_7002d0d05bc530d2302bc714c1e\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_4c17502a3e6020a2c17262b20e7\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_e3125ce0c8214a05954160d8e35\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_e3125ce0c8214a05954160d8e35\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_4c17502a3e6020a2c17262b20e7\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_7002d0d05bc530d2302bc714c1e\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_bd19b3b20b752ebc3ef8c88fbcf\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_d12e393362bc829c473bc07b75a\``);
        await queryRunner.query(`DROP TABLE \`media_basic_info\``);
    }

}
