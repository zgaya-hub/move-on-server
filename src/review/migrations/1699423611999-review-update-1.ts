import { MigrationInterface, QueryRunner } from "typeorm";

export class ReviewUpdate11699423611999 implements MigrationInterface {
    name = 'ReviewUpdate11699423611999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_65d77e55fcd11db0a93aa87a877\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_a4bb8bcf401b40c88c6e7e99011\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_695df3c468bdfe066643626ab3c\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_8eb7e3360030a7594a5777b7c78\``);
        await queryRunner.query(`DROP INDEX \`REL_65d77e55fcd11db0a93aa87a87\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`REL_a4bb8bcf401b40c88c6e7e9901\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`achievement_info\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`financial_info\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`media_additional_info\``);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` CHANGE \`emdia_original_language\` \`media_original_language\` enum ('Afar', 'Abkhazian', 'Avestan', 'Afrikaans', 'Akan', 'Amharic', 'Aragonese', 'Arabic', 'Assamese', 'Avaric', 'Aymara', 'Azerbaijani', 'Bashkir', 'Belarusian', 'Bulgarian', 'Bihari', 'Bislama', 'Bambara', 'Bengali', 'Tibetan', 'Breton', 'Bosnian', 'Catalan', 'Chechen', 'Chamorro', 'Corsican', 'Cree', 'Czech', 'Chuvash', 'Welsh', 'Danish', 'German', 'Divehi', 'Dzongkha', 'Ewe', 'Greek', 'English', 'Esperanto', 'Spanish', 'Estonian', 'Basque', 'Persian', 'Fulah', 'Finnish', 'Fijian', 'Faroese', 'French', 'Western Frisian', 'Irish', 'Scots Gaelic', 'Galician', 'Guarani', 'Gujarati', 'Manx', 'Hausa', 'Hebrew', 'Hindi', 'Hiri Motu', 'Croatian', 'Haitian', 'Hungarian', 'Armenian', 'Herero', 'Interlingua', 'Indonesian', 'Interlingue', 'Igbo', 'Nuosu', 'Inupiaq', 'Ido', 'Icelandic', 'Italian', 'Inuktitut', 'Japanese', 'Javanese', 'Georgian', 'Kongo', 'Kikuyu', 'Kuanyama', 'Kazakh', 'Kalaallisut', 'Central Khmer', 'Kannada', 'Korean', 'Kanuri', 'Kashmiri', 'Kurdish', 'Komi', 'Cornish', 'Kirghiz', 'Latin', 'Luxembourgish', 'Ganda', 'Limburgan', 'Lingala', 'Lao', 'Lithuanian', 'Luba Katanga', 'Latvian', 'Malagasy', 'Marshallese', 'Maori', 'Macedonian', 'Malayalam', 'Mongolian', 'Marathi', 'Malay', 'Maltese', 'Burmese', 'Nauru', 'Norwegian Bokmål', 'North Ndebele', 'Nepali', 'Ndonga', 'Dutch', 'Norwegian Nynorsk', 'Norwegian', 'South Ndebele', 'Navajo', 'Chichewa', 'Occitan', 'Ojibwa', 'Oromo', 'Oriya', 'Ossetian', 'Punjabi', 'Pali', 'Polish', 'Pashto', 'Portuguese', 'Quechua', 'Romansh', 'Kirundi', 'Romanian', 'Russian', 'Kinyarwanda', 'Sanskrit', 'Sardinian', 'Sindhi', 'Northern Sami', 'Sango', 'Sinhala', 'Slovak', 'Slovenian', 'Samoan', 'Shona', 'Somali', 'Albanian', 'Serbian', 'Swati', 'Southern Sotho', 'Sundanese', 'Swedish', 'Swahili', 'Tamil', 'Telugu', 'Tajik', 'Thai', 'Tigrinya', 'Turkmen', 'Tagalog', 'Tswana', 'Tonga', 'Turkish', 'Tsonga', 'Tatar', 'Twi', 'Tahitian', 'Uighur', 'Ukrainian', 'Urdu', 'Uzbek', 'Venda', 'Vietnamese', 'Volapuk', 'Walloon', 'Wolof', 'Xhosa', 'Yiddish', 'Yoruba', 'Zhuang', 'Chinese', 'Zulu') NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`trailer\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`manager_id\` varchar(36) NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`series_id\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`season_id\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`media_type\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`series_id\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`season_id\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD UNIQUE INDEX \`IDX_e3125ce0c8214a05954160d8e3\` (\`trailer_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD UNIQUE INDEX \`IDX_8c7eef99ec7bad4bcc5449e09f\` (\`trailer_id\`)`);
        await queryRunner.query(`ALTER TABLE \`media_image\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`external_link\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`trailer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD UNIQUE INDEX \`IDX_4655003f19d23390d776f53b65\` (\`trailer_id\`)`);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_110b5070b38dfb2286944413942\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_fa20c2cf09c3a2e89456234746d\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD UNIQUE INDEX \`IDX_110b5070b38dfb228694441394\` (\`movie_id\`)`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD UNIQUE INDEX \`IDX_fa20c2cf09c3a2e89456234746\` (\`episode_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_e3125ce0c8214a05954160d8e3\` ON \`media_basic_info\` (\`trailer_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_8c7eef99ec7bad4bcc5449e09f\` ON \`video\` (\`trailer_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_110b5070b38dfb228694441394\` ON \`media\` (\`movie_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_fa20c2cf09c3a2e89456234746\` ON \`media\` (\`episode_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4655003f19d23390d776f53b65\` ON \`media\` (\`trailer_id\`)`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_e3125ce0c8214a05954160d8e35\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_8c7eef99ec7bad4bcc5449e09f0\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_image\` ADD CONSTRAINT \`FK_a550fe23bc65c4f6ca64d3bef53\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`external_link\` ADD CONSTRAINT \`FK_cdc210d45c11b6820f5bb8e2819\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_126c6dca63494a05caa1e186752\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`trailer\` ADD CONSTRAINT \`FK_49705d3428def9439832a813401\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_110b5070b38dfb2286944413942\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_fa20c2cf09c3a2e89456234746d\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_4655003f19d23390d776f53b656\` FOREIGN KEY (\`trailer_id\`) REFERENCES \`trailer\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_4655003f19d23390d776f53b656\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_fa20c2cf09c3a2e89456234746d\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`FK_110b5070b38dfb2286944413942\``);
        await queryRunner.query(`ALTER TABLE \`trailer\` DROP FOREIGN KEY \`FK_49705d3428def9439832a813401\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_126c6dca63494a05caa1e186752\``);
        await queryRunner.query(`ALTER TABLE \`external_link\` DROP FOREIGN KEY \`FK_cdc210d45c11b6820f5bb8e2819\``);
        await queryRunner.query(`ALTER TABLE \`media_image\` DROP FOREIGN KEY \`FK_a550fe23bc65c4f6ca64d3bef53\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_8c7eef99ec7bad4bcc5449e09f0\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_e3125ce0c8214a05954160d8e35\``);
        await queryRunner.query(`DROP INDEX \`REL_4655003f19d23390d776f53b65\` ON \`media\``);
        await queryRunner.query(`DROP INDEX \`REL_fa20c2cf09c3a2e89456234746\` ON \`media\``);
        await queryRunner.query(`DROP INDEX \`REL_110b5070b38dfb228694441394\` ON \`media\``);
        await queryRunner.query(`DROP INDEX \`REL_8c7eef99ec7bad4bcc5449e09f\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`REL_e3125ce0c8214a05954160d8e3\` ON \`media_basic_info\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP INDEX \`IDX_fa20c2cf09c3a2e89456234746\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP INDEX \`IDX_110b5070b38dfb228694441394\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_fa20c2cf09c3a2e89456234746d\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_110b5070b38dfb2286944413942\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` DROP INDEX \`IDX_4655003f19d23390d776f53b65\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`external_link\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`media_image\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP INDEX \`IDX_8c7eef99ec7bad4bcc5449e09f\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP INDEX \`IDX_e3125ce0c8214a05954160d8e3\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP COLUMN \`trailer_id\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`season_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`series_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`media_type\` enum ('Trailer', 'Video', 'Full Movie') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`season_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`series_id\` varchar(36) NULL`);
        await queryRunner.query(`DROP TABLE \`trailer\``);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` CHANGE \`media_original_language\` \`emdia_original_language\` enum ('Afar', 'Abkhazian', 'Avestan', 'Afrikaans', 'Akan', 'Amharic', 'Aragonese', 'Arabic', 'Assamese', 'Avaric', 'Aymara', 'Azerbaijani', 'Bashkir', 'Belarusian', 'Bulgarian', 'Bihari', 'Bislama', 'Bambara', 'Bengali', 'Tibetan', 'Breton', 'Bosnian', 'Catalan', 'Chechen', 'Chamorro', 'Corsican', 'Cree', 'Czech', 'Chuvash', 'Welsh', 'Danish', 'German', 'Divehi', 'Dzongkha', 'Ewe', 'Greek', 'English', 'Esperanto', 'Spanish', 'Estonian', 'Basque', 'Persian', 'Fulah', 'Finnish', 'Fijian', 'Faroese', 'French', 'Western Frisian', 'Irish', 'Scots Gaelic', 'Galician', 'Guarani', 'Gujarati', 'Manx', 'Hausa', 'Hebrew', 'Hindi', 'Hiri Motu', 'Croatian', 'Haitian', 'Hungarian', 'Armenian', 'Herero', 'Interlingua', 'Indonesian', 'Interlingue', 'Igbo', 'Nuosu', 'Inupiaq', 'Ido', 'Icelandic', 'Italian', 'Inuktitut', 'Japanese', 'Javanese', 'Georgian', 'Kongo', 'Kikuyu', 'Kuanyama', 'Kazakh', 'Kalaallisut', 'Central Khmer', 'Kannada', 'Korean', 'Kanuri', 'Kashmiri', 'Kurdish', 'Komi', 'Cornish', 'Kirghiz', 'Latin', 'Luxembourgish', 'Ganda', 'Limburgan', 'Lingala', 'Lao', 'Lithuanian', 'Luba Katanga', 'Latvian', 'Malagasy', 'Marshallese', 'Maori', 'Macedonian', 'Malayalam', 'Mongolian', 'Marathi', 'Malay', 'Maltese', 'Burmese', 'Nauru', 'Norwegian Bokmål', 'North Ndebele', 'Nepali', 'Ndonga', 'Dutch', 'Norwegian Nynorsk', 'Norwegian', 'South Ndebele', 'Navajo', 'Chichewa', 'Occitan', 'Ojibwa', 'Oromo', 'Oriya', 'Ossetian', 'Punjabi', 'Pali', 'Polish', 'Pashto', 'Portuguese', 'Quechua', 'Romansh', 'Kirundi', 'Romanian', 'Russian', 'Kinyarwanda', 'Sanskrit', 'Sardinian', 'Sindhi', 'Northern Sami', 'Sango', 'Sinhala', 'Slovak', 'Slovenian', 'Samoan', 'Shona', 'Somali', 'Albanian', 'Serbian', 'Swati', 'Southern Sotho', 'Sundanese', 'Swedish', 'Swahili', 'Tamil', 'Telugu', 'Tajik', 'Thai', 'Tigrinya', 'Turkmen', 'Tagalog', 'Tswana', 'Tonga', 'Turkish', 'Tsonga', 'Tatar', 'Twi', 'Tahitian', 'Uighur', 'Ukrainian', 'Urdu', 'Uzbek', 'Venda', 'Vietnamese', 'Volapuk', 'Walloon', 'Wolof', 'Xhosa', 'Yiddish', 'Yoruba', 'Zhuang', 'Chinese', 'Zulu') NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`media_additional_info\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`financial_info\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`achievement_info\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`video\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_a4bb8bcf401b40c88c6e7e9901\` ON \`video\` (\`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_65d77e55fcd11db0a93aa87a87\` ON \`video\` (\`season_id\`)`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_8eb7e3360030a7594a5777b7c78\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`FK_695df3c468bdfe066643626ab3c\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_a4bb8bcf401b40c88c6e7e99011\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_65d77e55fcd11db0a93aa87a877\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
