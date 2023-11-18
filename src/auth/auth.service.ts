import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Manager } from '../manager/entities/manager.entity';
import { UserService } from '../user/user.service';
import { ManagerService } from '../manager/manager.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly userService: UserService, private readonly managerService: ManagerService) {}

  async authenticateUser(email: string): Promise<void> {
    try {
      const userExist = await this.userService.isUserExist(email);
      if (!userExist) throw new NotFoundException(`User authentication falied`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async authenticateManager(email: string): Promise<void> {
    try {
      const manager = await this.managerService.isManagerExist(email);
      if (!manager) throw new NotFoundException(`Manager authentication failed`);
    } catch (error) {
      throw new Error(error);
    }
  }

  signToken(user: User | Manager): string {
    const tokenUser = {
      email: user.email,
      ID: user.ID,
    };
    const token = this.jwtService.sign(tokenUser);
    return token;
  }

  decodeToken(token: string): TokenUserType {
    const tokenUser = this.jwtService.decode(token);
    return tokenUser as TokenUserType;
  }
}
