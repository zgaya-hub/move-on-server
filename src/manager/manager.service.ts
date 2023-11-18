import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Manager } from './entities/manager.entity';
import { ManagerInputDto } from './dto/manager.input.dto';
import { ManagerRepository } from './manager.repository';
import { ManagerAccountStatusEnum } from './enum/manager.enum';
import { Transactional } from 'typeorm-transactional';
import { comparePassword } from '../utilities/function/bcrypt';

@Injectable()
export class ManagerService {
  constructor(private readonly managerRepository: ManagerRepository) {}

  async findByEmail(email: string): Promise<Manager> {
    return this.managerRepository.findByEmail(email);
  }

  async isManagerExist(email: string): Promise<boolean> {
    return this.managerRepository.isManagerExist(email);
  }

  @Transactional()
  async managerRegister(input: ManagerInputDto.ManagerRegisterInput): Promise<Manager> {
    try {
      const manager = new Manager();

      const managerExist = await this.findByEmail(input.email);
      if (managerExist) throw new BadRequestException('Email already registered');

      manager.email = input.email;
      manager.password = input.password;
      manager.accountStatus = ManagerAccountStatusEnum.ACTIVE;

      await this.managerRepository.save(manager);
      return manager;
    } catch (error) {
      throw new Error(error);
    }
  }

  async managerLogin(input: ManagerInputDto.ManagerLoginInput): Promise<Manager> {
    try {
      const user = await this.findByEmail(input.email);
      if (!user) throw new NotFoundException('Invalid credentials specified');

      const isMatched = comparePassword(user.password, input.password);
      if (!isMatched) throw new NotFoundException('Invalid credentials specified');

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
