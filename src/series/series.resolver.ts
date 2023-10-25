import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeriesService } from './series.service';
import { Series } from './entities/series.entity';
import { CreateSeriesInput } from './dto/create-series.input';
import { UpdateSeriesInput } from './dto/update-series.input';

@Resolver(() => Series)
export class SeriesResolver {
  constructor(private readonly seriesService: SeriesService) {}

  @Mutation(() => Series)
  createSeries(@Args('createSeriesInput') createSeriesInput: CreateSeriesInput) {
    return this.seriesService.create(createSeriesInput);
  }

  @Query(() => [Series], { name: 'series' })
  findAll() {
    return this.seriesService.findAll();
  }

  @Query(() => Series, { name: 'series' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seriesService.findOne(id);
  }

  @Mutation(() => Series)
  updateSeries(@Args('updateSeriesInput') updateSeriesInput: UpdateSeriesInput) {
    return this.seriesService.update(updateSeriesInput.id, updateSeriesInput);
  }

  @Mutation(() => Series)
  removeSeries(@Args('id', { type: () => Int }) id: number) {
    return this.seriesService.remove(id);
  }
}
