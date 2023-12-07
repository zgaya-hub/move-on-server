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
  async managerSignIn(@Args('ManagerSignInInput') input: ManagerInputDto.ManagerSignInInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const manager = await this.managerService.managerSignIn(input);
    const token = this.authService.signToken(manager);
    return { token };
  }

  @Mutation(() => CommonOutputDto.AuthTokenOutput)
  async managerRegister(@Args('ManagerRegisterInput') input: ManagerInputDto.ManagerRegisterInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const manager = await this.managerService.managerRegister(input);
    const token = this.authService.signToken(manager);
    return { token };
  }
}
