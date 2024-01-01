import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1704118894646 implements MigrationInterface {
  name = 'Update1704118894646';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP FOREIGN KEY \`FK_ad377547e856e0c7e7f4ec9244e\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP FOREIGN KEY \`FK_b59d0774a96a6b723e162bde75c\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP COLUMN \`cast_id\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP COLUMN \`contact_no\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP COLUMN \`crew_id\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP COLUMN \`email\``);
    await queryRunner.query(
      `ALTER TABLE \`cineast\` ADD \`profession\` enum ('Producer', 'Director', 'Writer', 'Actor', 'Actress', 'Cinematographer', 'Editor', 'Costume Designer', 'Makeup Artist', 'Sound Engineer', 'Visual Effects Artist', 'Stunt Performer', 'Production Manager', 'Set Designer', 'Script Supervisor', 'Distributor', 'Marketing Manager', 'Film Critic', 'Casting Director', 'Location Manager', 'Post Production Supervisor', 'Screenwriter', 'Executive Producer', 'Camera Operator') NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`cineast\` DROP COLUMN \`profession\``);
    await queryRunner.query(`ALTER TABLE \`cineast\` ADD \`email\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`cineast\` ADD \`crew_id\` varchar(36) NULL`);
    await queryRunner.query(`ALTER TABLE \`cineast\` ADD \`contact_no\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`cineast\` ADD \`cast_id\` varchar(36) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`cineast\` ADD CONSTRAINT \`FK_b59d0774a96a6b723e162bde75c\` FOREIGN KEY (\`cast_id\`) REFERENCES \`cast\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cineast\` ADD CONSTRAINT \`FK_ad377547e856e0c7e7f4ec9244e\` FOREIGN KEY (\`crew_id\`) REFERENCES \`crew\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
