import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ManagerService } from './manager.service';
import { Manager } from './entities/manager.entity';
import { ManagerInputDto } from './dto/manager.input.dto';
import { AuthService } from '../auth/auth.service';
import { CommonOutputDto } from '../common/dto/common.dto';

@Resolver(() => Manager)
export class ManagerResolver {
  constructor(private readonly managerService: ManagerService, private readonly authService: AuthService) {}

  @Mutation(() => CommonOutputDto.AuthTokenOutput)
  async userLogin(@Args('UserLoginInput') input: ManagerInputDto.ManagerLoginInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const user = await this.managerService.managerLogin(input);
    const token = this.authService.signToken(user);
    return { token };
  }

  @Mutation(() => CommonOutputDto.AuthTokenOutput)
  async managerRegister(@Args('Register') input: ManagerInputDto.ManagerRegisterInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const manager = await this.managerService.managerRegister(input);
    const token = this.authService.signToken(manager);
    return { token };
  }
}
