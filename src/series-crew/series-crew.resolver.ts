import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeriesCrewService } from './series-crew.service';
import { SeriesCrew } from './entities/series-crew.entity';
import { CreateSeriesCrewInput } from './dto/create-series-crew.input';
import { UpdateSeriesCrewInput } from './dto/update-series-crew.input';

@Resolver(() => SeriesCrew)
export class SeriesCrewResolver {
  constructor(private readonly seriesCrewService: SeriesCrewService) {}

  @Mutation(() => SeriesCrew)
  createSeriesCrew(@Args('createSeriesCrewInput') createSeriesCrewInput: CreateSeriesCrewInput) {
    return this.seriesCrewService.create(createSeriesCrewInput);
  }

  @Query(() => [SeriesCrew], { name: 'seriesCrew' })
  findAll() {
    return this.seriesCrewService.findAll();
  }

  @Query(() => SeriesCrew, { name: 'seriesCrew' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCrewService.findOne(id);
  }

  @Mutation(() => SeriesCrew)
  updateSeriesCrew(@Args('updateSeriesCrewInput') updateSeriesCrewInput: UpdateSeriesCrewInput) {
    return this.seriesCrewService.update(updateSeriesCrewInput.id, updateSeriesCrewInput);
  }

  @Mutation(() => SeriesCrew)
  removeSeriesCrew(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCrewService.remove(id);
  }
}
