import { MigrationInterface, QueryRunner } from 'typeorm';

export class Cineast1703904993053 implements MigrationInterface {
  name = 'Cineast1703904993053';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cineast\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`full_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`contact_no\` varchar(255) NOT NULL, \`dob\` int NOT NULL, \`bio\` text NOT NULL, \`gender\` enum ('Female', 'Male') NOT NULL, \`country\` enum ('United States of America', 'Australia', 'Austria', 'Afghanistan', 'Canada', 'China', 'Republic of China', 'France', 'Germany', 'India', 'Indonesia', 'Iran', 'Iraq', 'Italy', 'Japan', 'North korea', 'South korea', 'Mexico', 'Netherlands', 'New zealand', 'Pakistan', 'Russian Federation', 'Singapore', 'Spain', 'Switzer land', 'Thailand', 'Turkey', 'United kingdom', 'Yemen', 'Zimbabwe') NOT NULL, \`award\` text NOT NULL, \`cast_id\` varchar(36) NULL, \`crew_id\` varchar(36) NULL, UNIQUE INDEX \`REL_b59d0774a96a6b723e162bde75\` (\`cast_id\`), UNIQUE INDEX \`REL_ad377547e856e0c7e7f4ec9244\` (\`crew_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cineast\` ADD CONSTRAINT \`FK_b59d0774a96a6b723e162bde75c\` FOREIGN KEY (\`cast_id\`) REFERENCES \`cast\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cineast\` ADD CONSTRAINT \`FK_ad377547e856e0c7e7f4ec9244e\` FOREIGN KEY (\`crew_id\`) REFERENCES \`crew\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP FOREIGN KEY \`FK_ad377547e856e0c7e7f4ec9244e\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP FOREIGN KEY \`FK_b59d0774a96a6b723e162bde75c\``);
    await queryRunner.query(`DROP TABLE \`cineast\``);
  }
}
