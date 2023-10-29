import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1698481163326 implements MigrationInterface {
    name = 'Migrations1698481163326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_36373fa8658b176587f3ea00b7f\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_f4522e65bf0d7d78c8b14ca6318\``);
        await queryRunner.query(`DROP INDEX \`REL_36373fa8658b176587f3ea00b7\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`REL_f4522e65bf0d7d78c8b14ca631\` ON \`video\``);
        await queryRunner.query(`CREATE TABLE \`media_basic_info\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`title\` varchar(255) NOT NULL, \`plot_summary\` text NOT NULL DEFAULT '', \`release_date\` int NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, \`season_id\` varchar(36) NULL, \`episode_id\` varchar(36) NULL, UNIQUE INDEX \`REL_d12e393362bc829c473bc07b75\` (\`movie_id\`), UNIQUE INDEX \`REL_bd19b3b20b752ebc3ef8c88fbc\` (\`series_id\`), UNIQUE INDEX \`REL_7002d0d05bc530d2302bc714c1\` (\`season_id\`), UNIQUE INDEX \`REL_4c17502a3e6020a2c17262b20e\` (\`episode_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`media_additional_info\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`origin_country\` enum ('United States of America', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Republic of China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Danzig', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gaza Strip', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy Roman Empire', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Republic of Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jonathanland', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mount Athos', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Newfoundland', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Ottoman Empire', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Prussia', 'Qatar', 'Romania', 'Rome', 'Russian Federation', 'Rwanda', 'Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe') NOT NULL, \`original_language\` enum ('Afar', 'Abkhazian', 'Avestan', 'Afrikaans', 'Akan', 'Amharic', 'Aragonese', 'Arabic', 'Assamese', 'Avaric', 'Aymara', 'Azerbaijani', 'Bashkir', 'Belarusian', 'Bulgarian', 'Bihari', 'Bislama', 'Bambara', 'Bengali', 'Tibetan', 'Breton', 'Bosnian', 'Catalan', 'Chechen', 'Chamorro', 'Corsican', 'Cree', 'Czech', 'Chuvash', 'Welsh', 'Danish', 'German', 'Divehi', 'Dzongkha', 'Ewe', 'Greek', 'English', 'Esperanto', 'Spanish', 'Estonian', 'Basque', 'Persian', 'Fulah', 'Finnish', 'Fijian', 'Faroese', 'French', 'Western Frisian', 'Irish', 'Scots Gaelic', 'Galician', 'Guarani', 'Gujarati', 'Manx', 'Hausa', 'Hebrew', 'Hindi', 'Hiri Motu', 'Croatian', 'Haitian', 'Hungarian', 'Armenian', 'Herero', 'Interlingua', 'Indonesian', 'Interlingue', 'Igbo', 'Nuosu', 'Inupiaq', 'Ido', 'Icelandic', 'Italian', 'Inuktitut', 'Japanese', 'Javanese', 'Georgian', 'Kongo', 'Kikuyu', 'Kuanyama', 'Kazakh', 'Kalaallisut', 'Central Khmer', 'Kannada', 'Korean', 'Kanuri', 'Kashmiri', 'Kurdish', 'Komi', 'Cornish', 'Kirghiz', 'Latin', 'Luxembourgish', 'Ganda', 'Limburgan', 'Lingala', 'Lao', 'Lithuanian', 'Luba Katanga', 'Latvian', 'Malagasy', 'Marshallese', 'Maori', 'Macedonian', 'Malayalam', 'Mongolian', 'Marathi', 'Malay', 'Maltese', 'Burmese', 'Nauru', 'Norwegian Bokmål', 'North Ndebele', 'Nepali', 'Ndonga', 'Dutch', 'Norwegian Nynorsk', 'Norwegian', 'South Ndebele', 'Navajo', 'Chichewa', 'Occitan', 'Ojibwa', 'Oromo', 'Oriya', 'Ossetian', 'Punjabi', 'Pali', 'Polish', 'Pashto', 'Portuguese', 'Quechua', 'Romansh', 'Kirundi', 'Romanian', 'Russian', 'Kinyarwanda', 'Sanskrit', 'Sardinian', 'Sindhi', 'Northern Sami', 'Sango', 'Sinhala', 'Slovak', 'Slovenian', 'Samoan', 'Shona', 'Somali', 'Albanian', 'Serbian', 'Swati', 'Southern Sotho', 'Sundanese', 'Swedish', 'Swahili', 'Tamil', 'Telugu', 'Tajik', 'Thai', 'Tigrinya', 'Turkmen', 'Tagalog', 'Tswana', 'Tonga', 'Turkish', 'Tsonga', 'Tatar', 'Twi', 'Tahitian', 'Uighur', 'Ukrainian', 'Urdu', 'Uzbek', 'Venda', 'Vietnamese', 'Volapuk', 'Walloon', 'Wolof', 'Xhosa', 'Yiddish', 'Yoruba', 'Zhuang', 'Chinese', 'Zulu') NOT NULL, \`genre\` enum ('action', 'drama', 'comedy', 'fantasy', 'horror', 'romance', 'dventure', 'war', 'biography', 'superhero') NOT NULL, \`status\` enum ('In Production', 'Released', 'Post Production', 'On Hold', 'Canceled') NOT NULL, \`movie_id\` varchar(36) NULL, \`series_id\` varchar(36) NULL, UNIQUE INDEX \`unique_movie_series\` (\`movie_id\`, \`series_id\`), UNIQUE INDEX \`REL_6441fdce7b41a203dc54f98e57\` (\`movie_id\`), UNIQUE INDEX \`REL_bde49a064a03078713eddc6f8e\` (\`series_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`release_date\``);
        await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`run_time\``);
        await queryRunner.query(`ALTER TABLE \`episode\` DROP COLUMN \`IMDb_rating\``);
        await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`release_date\``);
        await queryRunner.query(`ALTER TABLE \`season\` DROP COLUMN \`plot_summary\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`run_time\` int NOT NULL`);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`video\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD UNIQUE INDEX \`IDX_713d6f4436d5d82b75b0188067\` (\`movie_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD UNIQUE INDEX \`IDX_a4bb8bcf401b40c88c6e7e9901\` (\`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`video\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_713d6f4436d5d82b75b0188067\` ON \`video\` (\`movie_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_a4bb8bcf401b40c88c6e7e9901\` ON \`video\` (\`series_id\`)`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_d12e393362bc829c473bc07b75a\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_bd19b3b20b752ebc3ef8c88fbcf\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_7002d0d05bc530d2302bc714c1e\` FOREIGN KEY (\`season_id\`) REFERENCES \`season\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` ADD CONSTRAINT \`FK_4c17502a3e6020a2c17262b20e7\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episode\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_713d6f4436d5d82b75b01880678\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_a4bb8bcf401b40c88c6e7e99011\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` ADD CONSTRAINT \`FK_6441fdce7b41a203dc54f98e575\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` ADD CONSTRAINT \`FK_bde49a064a03078713eddc6f8e7\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` DROP FOREIGN KEY \`FK_bde49a064a03078713eddc6f8e7\``);
        await queryRunner.query(`ALTER TABLE \`media_additional_info\` DROP FOREIGN KEY \`FK_6441fdce7b41a203dc54f98e575\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_a4bb8bcf401b40c88c6e7e99011\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_713d6f4436d5d82b75b01880678\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_4c17502a3e6020a2c17262b20e7\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_7002d0d05bc530d2302bc714c1e\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_bd19b3b20b752ebc3ef8c88fbcf\``);
        await queryRunner.query(`ALTER TABLE \`media_basic_info\` DROP FOREIGN KEY \`FK_d12e393362bc829c473bc07b75a\``);
        await queryRunner.query(`DROP INDEX \`REL_a4bb8bcf401b40c88c6e7e9901\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`REL_713d6f4436d5d82b75b0188067\` ON \`video\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`video\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP INDEX \`IDX_a4bb8bcf401b40c88c6e7e9901\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP INDEX \`IDX_713d6f4436d5d82b75b0188067\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`unique_movie_series\` ON \`video\` (\`movie_id\`, \`series_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`run_time\``);
        await queryRunner.query(`ALTER TABLE \`season\` ADD \`plot_summary\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`season\` ADD \`release_date\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`season\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`episode\` ADD \`IMDb_rating\` decimal(3,1) NOT NULL DEFAULT '0.0'`);
        await queryRunner.query(`ALTER TABLE \`episode\` ADD \`run_time\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`episode\` ADD \`release_date\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`episode\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`REL_bde49a064a03078713eddc6f8e\` ON \`media_additional_info\``);
        await queryRunner.query(`DROP INDEX \`REL_6441fdce7b41a203dc54f98e57\` ON \`media_additional_info\``);
        await queryRunner.query(`DROP INDEX \`unique_movie_series\` ON \`media_additional_info\``);
        await queryRunner.query(`DROP TABLE \`media_additional_info\``);
        await queryRunner.query(`DROP INDEX \`REL_4c17502a3e6020a2c17262b20e\` ON \`media_basic_info\``);
        await queryRunner.query(`DROP INDEX \`REL_7002d0d05bc530d2302bc714c1\` ON \`media_basic_info\``);
        await queryRunner.query(`DROP INDEX \`REL_bd19b3b20b752ebc3ef8c88fbc\` ON \`media_basic_info\``);
        await queryRunner.query(`DROP INDEX \`REL_d12e393362bc829c473bc07b75\` ON \`media_basic_info\``);
        await queryRunner.query(`DROP TABLE \`media_basic_info\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f4522e65bf0d7d78c8b14ca631\` ON \`video\` (\`movie_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_36373fa8658b176587f3ea00b7\` ON \`video\` (\`series_id\`)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_f4522e65bf0d7d78c8b14ca6318\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movie\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_36373fa8658b176587f3ea00b7f\` FOREIGN KEY (\`series_id\`) REFERENCES \`series\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
