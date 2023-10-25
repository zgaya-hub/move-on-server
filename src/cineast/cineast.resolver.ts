import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CineastService } from './cineast.service';
import { Cineast } from './entities/cineast.entity';
import { CreateCineastInput } from './dto/create-cineast.input';
import { UpdateCineastInput } from './dto/update-cineast.input';

@Resolver(() => Cineast)
export class CineastResolver {
  constructor(private readonly cineastService: CineastService) {}

  @Mutation(() => Cineast)
  createCineast(@Args('createCineastInput') createCineastInput: CreateCineastInput) {
    return this.cineastService.create(createCineastInput);
  }

  @Query(() => [Cineast], { name: 'cineast' })
  findAll() {
    return this.cineastService.findAll();
  }

  @Query(() => Cineast, { name: 'cineast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cineastService.findOne(id);
  }

  @Mutation(() => Cineast)
  updateCineast(@Args('updateCineastInput') updateCineastInput: UpdateCineastInput) {
    return this.cineastService.update(updateCineastInput.id, updateCineastInput);
  }

  @Mutation(() => Cineast)
  removeCineast(@Args('id', { type: () => Int }) id: number) {
    return this.cineastService.remove(id);
  }
}
