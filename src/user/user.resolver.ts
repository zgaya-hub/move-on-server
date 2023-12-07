/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserInputDto } from './dto/user.input.dto';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { UserOutputDto } from './dto/user.output.dto';
import { CommonOutputDto } from '../common/dto/common.dto';

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

  @Mutation(() => CommonOutputDto.AuthTokenOutput)
  async userSignIn(@Args('UserSignInInput') input: UserInputDto.UserSignInInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const user = await this.userService.userSignIn(input);
    const token = this.authService.signToken(user);
    return { token };
  }

  @Mutation(() => CommonOutputDto.AuthTokenOutput)
  async userRegister(@Args('UserRegisterInput') input: UserInputDto.UserRegisterInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const user = await this.userService.userRegister(input);
    const token = this.authService.signToken(user);
    return { token };
  }

  /*   @UseGuards(JwtAuthGuard)
  @Mutation(() => CommonDtos.DataInJSON)
  tokenDecode(@Context() context): CommonDtos.DataInJSON {
    const { user } = context;
    return { data: JSON.parse(JSON.stringify(user)) };
  }
 */

  /*  @UseGuards(JwtAuthGuard)
  @Mutation(() => CommonDtos.StringResponse)
  async changePassword(
    @CurrentUser() authUser: AuthUser,
    @Args('input') input: UserDtos.ChangePasswordDto,
  ): Promise<CommonDtos.StringResponse> {
    return this.userService.changePassword(authUser, input);
  } */
}
