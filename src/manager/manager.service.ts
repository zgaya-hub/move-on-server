import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Manager } from './entities/manager.entity';
import { ManagerInputDto } from './dto/manager.input.dto';
import { ManagerRepository } from './manager.repository';
import { ManagerAccountStatusEnum } from './enum/manager.enum';
import { comparePassword } from '../utilities/function/bcrypt';
import { EMAIL_ALREADY_REGISTERED_ERROR_ID, EMAIL_NOT_EXIST_ERROR_ID, INVALID_CREDENTIALS_ERROR_ID } from './manager.error-codes';

@Injectable()
export class ManagerService {
  constructor(private readonly managerRepository: ManagerRepository) {}

  async findByEmail(email: string): Promise<Manager> {
    return this.managerRepository.findByEmail(email);
  }

  async isManagerExist(email: string): Promise<boolean> {
    return this.managerRepository.isManagerExist(email);
  }

  async managerRegister(input: ManagerInputDto.ManagerRegisterInput): Promise<Manager> {
    try {
      const manager = new Manager();

      const managerExist = await this.findByEmail(input.Email);
      if (managerExist) {
        throw new ConflictException(EMAIL_ALREADY_REGISTERED_ERROR_ID, { description: 'Email already registered' });
      }

      manager.email = input.Email;
      manager.password = input.Password;
      manager.accountStatus = ManagerAccountStatusEnum.ACTIVE;

      await this.managerRepository.save(manager);
      return manager;
    } catch (error) {
      throw new Error(error);
    }
  }

  async managerSignIn(input: ManagerInputDto.ManagerSignInInput): Promise<Manager> {
    try {
      const user = await this.findByEmail(input.Email);
      if (!user) {
        throw new UnauthorizedException(EMAIL_NOT_EXIST_ERROR_ID, { description: 'Email not exist' });
      }

      const isMatched = comparePassword(user.password, input.Password);
      if (!isMatched) throw new UnauthorizedException(INVALID_CREDENTIALS_ERROR_ID, { description: 'Password mismatch' });

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
