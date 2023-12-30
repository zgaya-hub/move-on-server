import { MigrationInterface } from 'typeorm';
import { ManagerInputDto } from '../dto/manager.input.dto';
import { Manager } from '../entities/manager.entity';
import { ManagerAccountStatusEnum } from '../enum/manager.enum';

export class OwnerSeeder1697681517438 implements MigrationInterface {
  public async up(): Promise<void> {
    const input: ManagerInputDto.ManagerRegisterInput = {
      Email: process.env.OWNER_EMAIL,
      Password: process.env.OWNER_PASSWORD,
    };

    const manager = new Manager();

    manager.email = input.Email;
    manager.password = input.Password;
    manager.accountStatus = ManagerAccountStatusEnum.ACTIVE;

    await manager.save();
  }

  public async down(): Promise<void> {}
}
