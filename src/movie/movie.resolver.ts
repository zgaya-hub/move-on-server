import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { CurrentUser } from '../decorator/current-user/current-user.decorator';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MovieInputDto } from './dto/movie.input.dto';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';

@Resolver(() => Movie)
@UseGuards(JwtManagerAuthGuard)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createMovie(
    @Args('CreateMovieInput')
    input: MovieInputDto.CreateMovieInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.movieService.createMovie(input, manager);
    } catch (error) {
      throw new Error(error);
    }
  }
}
