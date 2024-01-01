import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SeasonService } from './season.service';
import { Season } from './entities/season.entity';
import { CommonOutputDto } from '../common/dto/common.dto';
import { SeasonInputDto } from './dto/season.input.dto';
import { UseGuards } from '@nestjs/common';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { SeasonOutputDto } from './dto/season.output.dto';

@Resolver(() => Season)
@UseGuards(JwtManagerAuthGuard)
export class SeasonResolver {
  constructor(private readonly seasonService: SeasonService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createSeason(
    @Args('CreateSeasonInput')
    input: SeasonInputDto.CreateSeasonInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.seasonService.createSeason(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => [Season])
  async getSeasonBySeriesId(@Args('GetSeasonBySeriesIdParams') param: SeasonInputDto.GetSeasonBySeriesIdParams): Promise<Season[]> {
    try {
      return this.seasonService.getSeasonBySeriesId(param);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => SeasonOutputDto.GetNextSeasonNumberOutput)
  async getNextSeasonNumber(@Args('GetNextSeasonNumberParams') param: SeasonInputDto.GetNextSeasonNumberParams): Promise<SeasonOutputDto.GetNextSeasonNumberOutput> {
    try {
      return this.seasonService.getNextSeasonNumber(param.SeriesId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
