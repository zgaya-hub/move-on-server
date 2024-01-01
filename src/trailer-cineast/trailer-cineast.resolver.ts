import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TrailerCineastService } from './trailer-cineast.service';
import { TrailerCineast } from './entities/trailer-cineast.entity';
import { CreateTrailerCineastInput } from './dto/create-trailer-cineast.input';
import { UpdateTrailerCineastInput } from './dto/update-trailer-cineast.input';

@Resolver(() => TrailerCineast)
export class TrailerCineastResolver {
  constructor(private readonly trailerCineastService: TrailerCineastService) {}

  @Mutation(() => TrailerCineast)
  createTrailerCineast(@Args('createTrailerCineastInput') createTrailerCineastInput: CreateTrailerCineastInput) {
    return this.trailerCineastService.create(createTrailerCineastInput);
  }

  @Query(() => [TrailerCineast], { name: 'trailerCineast' })
  findAll() {
    return this.trailerCineastService.findAll();
  }

  @Query(() => TrailerCineast, { name: 'trailerCineast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.trailerCineastService.findOne(id);
  }

  @Mutation(() => TrailerCineast)
  updateTrailerCineast(@Args('updateTrailerCineastInput') updateTrailerCineastInput: UpdateTrailerCineastInput) {
    return this.trailerCineastService.update(updateTrailerCineastInput.id, updateTrailerCineastInput);
  }

  @Mutation(() => TrailerCineast)
  removeTrailerCineast(@Args('id', { type: () => Int }) id: number) {
    return this.trailerCineastService.remove(id);
  }
}
