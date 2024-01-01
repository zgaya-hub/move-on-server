import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SeriesService } from './series.service';
import { Series } from './entities/series.entity';
import { CommonOutputDto } from '../common/dto/common.dto';
import { CurrentUser } from '../decorator/current-user/current-user.decorator';
import { SeriesInputDto } from './dto/series.input.dto';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { UseGuards } from '@nestjs/common';
import { SeriesOutputDto } from './dto/series.output.dto';

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

  @Query(() => SeriesOutputDto.GetManagerSeriesForTableOutput)
  async getManagerSeriesForTable(
    @Args('GetManagerSeriesForTableInput')
    input: SeriesInputDto.GetManagerSeriesForTableInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<SeriesOutputDto.GetManagerSeriesForTableOutput> {
    try {
      return this.seriesService.getManagerSeriesForTable(input, manager);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async deleteSeriesById(@Args('DeleteSeriesByIdParams') param: SeriesInputDto.DeleteSeriesByIdParams): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.seriesService.deleteSeriesById(param);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async deleteMultipleSeriesByIdz(@Args('DeleteMultipleSeriesByIdzParams') param: SeriesInputDto.DeleteMultipleSeriesByIdzParams): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.seriesService.deleteMultipleSeriesByIdz(param);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async updateSeries(
    @Args('UpdateSeriesParams') param: SeriesInputDto.UpdateSeriesParams,
    @Args('UpdateSeriesInput') input: SeriesInputDto.UpdateSeriesInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.seriesService.updateSeries(param.SeriesId, input, manager);
    } catch (error) {
      throw new Error(error);
    }
  }
}
