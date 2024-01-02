import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { SeriesCineastService } from './series-cineast.service';
import { SeriesCineast } from './entities/series-cineast.entity';
import { SeriesCineastInputDto } from './dto/series-cineast.input.dto';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { CommonOutputDto } from 'src/common/dto/common.dto';

@Resolver(() => SeriesCineast)
export class SeriesCineastResolver {
  constructor(private readonly seriesCineastService: SeriesCineastService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createSeriesCineast(
    @Args('CreateSeriesCineastInput')
    input: SeriesCineastInputDto.CreateSeriesCineastInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.seriesCineastService.createSeriesCineast(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => [Cineast])
  async getCineastsBySeriesId(
    @Args('GetCineastsBySeriesIdParams')
    params: SeriesCineastInputDto.GetCineastsBySeriesIdParams,
  ): Promise<Cineast[]> {
    try {
      return this.seriesCineastService.getCineastsBySeriesId(params.SeriesId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
