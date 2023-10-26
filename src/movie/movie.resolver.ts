import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { CommonOutputDto } from '../common/dto/common.dto';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  /*   @Mutation(() => )
  async userRegister(@Args('UserRegisterInput') input: UserInputDto.UserRegisterInput): Promise<CommonOutputDto.AuthTokenOutput> {
    const user = await this.userService.userRegister(input);
    const token = this.authService.signToken(user);
    return { token };
  } */
}
