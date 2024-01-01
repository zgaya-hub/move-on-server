import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MovieCineastService } from './movie-cineast.service';
import { MovieCineast } from './entities/movie-cineast.entity';
import { CreateMovieCineastInput } from './dto/create-movie-cineast.input';
import { UpdateMovieCineastInput } from './dto/update-movie-cineast.input';

@Resolver(() => MovieCineast)
export class MovieCineastResolver {
  constructor(private readonly movieCineastService: MovieCineastService) {}

  @Mutation(() => MovieCineast)
  createMovieCineast(@Args('createMovieCineastInput') createMovieCineastInput: CreateMovieCineastInput) {
    return this.movieCineastService.create(createMovieCineastInput);
  }

  @Query(() => [MovieCineast], { name: 'movieCineast' })
  findAll() {
    return this.movieCineastService.findAll();
  }

  @Query(() => MovieCineast, { name: 'movieCineast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.movieCineastService.findOne(id);
  }

  @Mutation(() => MovieCineast)
  updateMovieCineast(@Args('updateMovieCineastInput') updateMovieCineastInput: UpdateMovieCineastInput) {
    return this.movieCineastService.update(updateMovieCineastInput.id, updateMovieCineastInput);
  }

  @Mutation(() => MovieCineast)
  removeMovieCineast(@Args('id', { type: () => Int }) id: number) {
    return this.movieCineastService.remove(id);
  }
}
