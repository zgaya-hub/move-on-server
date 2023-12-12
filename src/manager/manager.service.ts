import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Manager } from './entities/manager.entity';
import { ManagerInputDto } from './dto/manager.input.dto';
import { ManagerRepository } from './manager.repository';
import { ManagerAccountStatusEnum } from './enum/manager.enum';
import { Transactional } from 'typeorm-transactional';
import { comparePassword } from '../utilities/function/bcrypt';
import { EmailAlreadyExistsException, InvalidCredentialsException } from './manager.exceptions';

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

      const managerExist = await this.findByEmail(input.email);
      if (managerExist) throw new EmailAlreadyExistsException();

      manager.email = input.email;
      manager.password = input.password;
      manager.accountStatus = ManagerAccountStatusEnum.ACTIVE;

      await this.managerRepository.save(manager);
      return manager;
    } catch (error) {
      throw new Error(error);
    }
  }

  async managerSignIn(input: ManagerInputDto.ManagerSignInInput): Promise<Manager> {
    try {
      const user = await this.findByEmail(input.email);
      if (!user) throw new InvalidCredentialsException();

      const isMatched = comparePassword(user.password, input.password);
      if (!isMatched) throw new InvalidCredentialsException();

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
