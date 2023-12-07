import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { UserInputDto } from './dto/user.input.dto';
import { comparePassword } from '../utilities/function/bcrypt';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }

  async isUserExist(email: string): Promise<boolean> {
    return this.userRepository.isUserExist(email);
  }

  async userRegister(input: UserInputDto.UserRegisterInput): Promise<User> {
    try {
      const user = new User();

      const existingUser = await this.findByEmail(input.email);
      if (existingUser) throw new ConflictException('Email have registered');

      user.email = input.email;
      user.password = input.password;

      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async userSignIn(input: UserInputDto.UserSignInInput): Promise<User> {
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

  /* async registerWithOutPassword(input: UserDtos.GoogleInputDtos): Promise<User> {
    try {
      const { name, email } = input;

      const user = new User();
      user.email = email;

      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async googleSignIn(input: UserDtos.GoogleInputDtos): Promise<User> {
    try {
      const { email } = input;

      const existingUser = await this.getUserByEmail(email);
      if (existingUser) return existingUser;
      else {
        const user = await this.registerWithOutPassword(input);
        return user;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async changePassword(authUser: AuthUser, input: UserDtos.ChangePasswordDto): Promise<CommonDtos.StringResponse> {
    try {
      const { email } = authUser;
      const { password, newPassword } = input;

      const user = await this.getUserByEmail(email);
      if (!user) throw new UnauthorizedException('Unauthorized: Please check your Credentials');

      const passwordMatch = user.password === password;
      if (!passwordMatch) throw new UnauthorizedException('Unauthorized: Please check your Credentials');
      this.userRepository.save(user);

      user.password = newPassword;
      await this.userRepository.save(user);

      return { response: 'Password updated' };
    } catch (error) {
      throw new Error(error);
    }
  } */
}
