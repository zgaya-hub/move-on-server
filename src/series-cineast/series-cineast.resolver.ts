import { Resolver, Query, Args } from '@nestjs/graphql';
import { SeriesCineastService } from './series-cineast.service';
import { SeriesCineast } from './entities/series-cineast.entity';
import { SeriesCineastInputDto } from './dto/series-cineast.input.dto';
import { Cineast } from 'src/cineast/entities/cineast.entity';

@Resolver(() => SeriesCineast)
export class SeriesCineastResolver {
  constructor(private readonly seriesCineastService: SeriesCineastService) {}

  @Query(() => Cineast)
  async getSeriesCineastBySeriesId(
    @Args('GetSeriesCineastBySeriesIdParams')
    params: SeriesCineastInputDto.GetSeriesCineastBySeriesIdParams,
  ): Promise<Cineast> {
    try {
      return this.seriesCineastService.getSeriesCineastBySeriesId(params.SeriesId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
