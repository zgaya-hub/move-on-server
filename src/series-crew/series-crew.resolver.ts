import { Args, Query, Resolver } from '@nestjs/graphql';
import { SeriesCrewService } from './series-crew.service';
import { SeriesCrew } from './entities/series-crew.entity';
import { SeriesCrewInputDto } from './dto/series-crew.input.dto';
import { Crew } from 'src/crew/entities/crew.entity';

@Resolver(() => SeriesCrew)
export class SeriesCrewResolver {
  constructor(private readonly seriesCrewService: SeriesCrewService) {}

  @Query(() => Crew)
  async getSeriesCrewBySeriesId(
    @Args('GetSeriesCrewByMediaIdParams')
    params: SeriesCrewInputDto.GetSeriesCrewByMediaIdParams,
  ): Promise<Crew> {
    try {
      return this.seriesCrewService.getSeriesCrewBySeriesId(params.SeriesId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
