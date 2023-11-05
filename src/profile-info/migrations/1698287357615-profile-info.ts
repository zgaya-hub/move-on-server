import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProfileInfo1698287357615 implements MigrationInterface {
  name = 'ProfileInfo1698287357615';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`profile_info\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`participant_first_name\` varchar(255) NOT NULL, \`participant_last_name\` varchar(255) NOT NULL, \`participant_contact_number\` varchar(255) NOT NULL, \`participant_dob\` int NOT NULL, \`participant_gender\` enum ('Female', 'Male') NOT NULL, \`participant_address\` text NOT NULL, \`manager_id\` varchar(36) NULL, \`user_id\` varchar(36) NULL, UNIQUE INDEX \`unique_user_manager\` (\`user_id\`, \`manager_id\`), UNIQUE INDEX \`REL_2a1e8125e4b4ae4b5fec0a99cb\` (\`manager_id\`), UNIQUE INDEX \`REL_999109cbe5c76b871fe5a6c13f\` (\`user_id\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`profile_info\` ADD CONSTRAINT \`FK_2a1e8125e4b4ae4b5fec0a99cbb\` FOREIGN KEY (\`manager_id\`) REFERENCES \`manager\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`profile_info\` ADD CONSTRAINT \`FK_999109cbe5c76b871fe5a6c13f9\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`profile_info\` DROP FOREIGN KEY \`FK_999109cbe5c76b871fe5a6c13f9\``);
    await queryRunner.query(`ALTER TABLE \`profile_info\` DROP FOREIGN KEY \`FK_2a1e8125e4b4ae4b5fec0a99cbb\``);
    await queryRunner.query(`DROP TABLE \`profile_info\``);
  }
}
