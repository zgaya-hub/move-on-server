import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Manager } from '../manager/entities/manager.entity';
import { UserService } from '../user/user.service';
import { ManagerService } from '../manager/manager.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly userService: UserService, private readonly managerService: ManagerService) {}

  async authenticateUser(email: string): Promise<User> {
    try {
      const user = await this.userService.findByEmail(email);
      if (!user) throw new NotFoundException(`User authentication falied`);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async authenticateManager(email: string): Promise<Manager> {
    try {
      const manager = await this.managerService.findByEmail(email);
      if (!manager) throw new NotFoundException(`Manager authentication failed`);

      return manager;
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
