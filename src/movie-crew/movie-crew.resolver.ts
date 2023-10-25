import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MovieCrewService } from './movie-crew.service';
import { MovieCrew } from './entities/movie-crew.entity';
import { CreateMovieCrewInput } from './dto/create-movie-crew.input';
import { UpdateMovieCrewInput } from './dto/update-movie-crew.input';

@Resolver(() => MovieCrew)
export class MovieCrewResolver {
  constructor(private readonly movieCrewService: MovieCrewService) {}

  @Mutation(() => MovieCrew)
  createMovieCrew(@Args('createMovieCrewInput') createMovieCrewInput: CreateMovieCrewInput) {
    return this.movieCrewService.create(createMovieCrewInput);
  }

  @Query(() => [MovieCrew], { name: 'movieCrew' })
  findAll() {
    return this.movieCrewService.findAll();
  }

  @Query(() => MovieCrew, { name: 'movieCrew' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.movieCrewService.findOne(id);
  }

  @Mutation(() => MovieCrew)
  updateMovieCrew(@Args('updateMovieCrewInput') updateMovieCrewInput: UpdateMovieCrewInput) {
    return this.movieCrewService.update(updateMovieCrewInput.id, updateMovieCrewInput);
  }

  @Mutation(() => MovieCrew)
  removeMovieCrew(@Args('id', { type: () => Int }) id: number) {
    return this.movieCrewService.remove(id);
  }
}
