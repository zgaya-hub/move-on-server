import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SeriesService } from './series.service';
import { Series } from './entities/series.entity';
import { CommonOutputDto } from '../common/dto/common.dto';
import { CurrentUser } from '../decorator/current-user/current-user.decorator';
import { SeriesInputDto } from './dto/SeriesInput.dto';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Series)
@UseGuards(JwtManagerAuthGuard)
export class SeriesResolver {
  constructor(private readonly seriesService: SeriesService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createSeries(
    @Args('CreateSeriesInput')
    input: SeriesInputDto.CreateSeriesInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.seriesService.createSeries(input, manager);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => [Series])
  async getManagerSeriesWithImageAndBasicInfo(@CurrentUser() manager: CurrentManagerType): Promise<Series[]> {
    try {
      return this.seriesService.getManagerSeriesWithImageAndBasicInfo(manager);
    } catch (error) {
      throw new Error(error);
    }
  }
}
