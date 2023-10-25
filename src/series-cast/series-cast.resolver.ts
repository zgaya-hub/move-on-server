import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeriesCastService } from './series-cast.service';
import { SeriesCast } from './entities/series-cast.entity';
import { CreateSeriesCastInput } from './dto/create-series-cast.input';
import { UpdateSeriesCastInput } from './dto/update-series-cast.input';

@Resolver(() => SeriesCast)
export class SeriesCastResolver {
  constructor(private readonly seriesCastService: SeriesCastService) {}

  @Mutation(() => SeriesCast)
  createSeriesCast(@Args('createSeriesCastInput') createSeriesCastInput: CreateSeriesCastInput) {
    return this.seriesCastService.create(createSeriesCastInput);
  }

  @Query(() => [SeriesCast], { name: 'seriesCast' })
  findAll() {
    return this.seriesCastService.findAll();
  }

  @Query(() => SeriesCast, { name: 'seriesCast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCastService.findOne(id);
  }

  @Mutation(() => SeriesCast)
  updateSeriesCast(@Args('updateSeriesCastInput') updateSeriesCastInput: UpdateSeriesCastInput) {
    return this.seriesCastService.update(updateSeriesCastInput.id, updateSeriesCastInput);
  }

  @Mutation(() => SeriesCast)
  removeSeriesCast(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCastService.remove(id);
  }
}
