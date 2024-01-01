import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeriesCineastService } from './series-cineast.service';
import { SeriesCineast } from './entities/series-cineast.entity';
import { CreateSeriesCineastInput } from './dto/create-series-cineast.input';
import { UpdateSeriesCineastInput } from './dto/update-series-cineast.input';

@Resolver(() => SeriesCineast)
export class SeriesCineastResolver {
  constructor(private readonly seriesCineastService: SeriesCineastService) {}

  @Mutation(() => SeriesCineast)
  createSeriesCineast(@Args('createSeriesCineastInput') createSeriesCineastInput: CreateSeriesCineastInput) {
    return this.seriesCineastService.create(createSeriesCineastInput);
  }

  @Query(() => [SeriesCineast], { name: 'seriesCineast' })
  findAll() {
    return this.seriesCineastService.findAll();
  }

  @Query(() => SeriesCineast, { name: 'seriesCineast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCineastService.findOne(id);
  }

  @Mutation(() => SeriesCineast)
  updateSeriesCineast(@Args('updateSeriesCineastInput') updateSeriesCineastInput: UpdateSeriesCineastInput) {
    return this.seriesCineastService.update(updateSeriesCineastInput.id, updateSeriesCineastInput);
  }

  @Mutation(() => SeriesCineast)
  removeSeriesCineast(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCineastService.remove(id);
  }
}
