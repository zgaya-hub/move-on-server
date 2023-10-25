import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MovieCastService } from './movie-cast.service';
import { MovieCast } from './entities/movie-cast.entity';
import { CreateMovieCastInput } from './dto/create-movie-cast.input';
import { UpdateMovieCastInput } from './dto/update-movie-cast.input';

@Resolver(() => MovieCast)
export class MovieCastResolver {
  constructor(private readonly movieCastService: MovieCastService) {}

  @Mutation(() => MovieCast)
  createMovieCast(@Args('createMovieCastInput') createMovieCastInput: CreateMovieCastInput) {
    return this.movieCastService.create(createMovieCastInput);
  }

  @Query(() => [MovieCast], { name: 'movieCast' })
  findAll() {
    return this.movieCastService.findAll();
  }

  @Query(() => MovieCast, { name: 'movieCast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.movieCastService.findOne(id);
  }

  @Mutation(() => MovieCast)
  updateMovieCast(@Args('updateMovieCastInput') updateMovieCastInput: UpdateMovieCastInput) {
    return this.movieCastService.update(updateMovieCastInput.id, updateMovieCastInput);
  }

  @Mutation(() => MovieCast)
  removeMovieCast(@Args('id', { type: () => Int }) id: number) {
    return this.movieCastService.remove(id);
  }
}
