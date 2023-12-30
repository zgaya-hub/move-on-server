import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EpisodeService } from './episode.service';
import { Episode } from './entities/episode.entity';
import { CommonOutputDto } from '../common/dto/common.dto';
import { EpisodeInputDto } from './dto/episode.input.dto';
import { UseGuards } from '@nestjs/common';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { EpisodeOutputDto } from './dto/episode.output.dto';

@Resolver(() => Episode)
@UseGuards(JwtManagerAuthGuard)
export class EpisodeResolver {
  constructor(private readonly episodeService: EpisodeService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createEpisode(
    @Args('CreateEpisodeInput')
    input: EpisodeInputDto.CreateEpisodeInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.episodeService.createEpisode(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async changeEpisodeSeason(
    @Args('ChangeEpisodeSeasonInput')
    input: EpisodeInputDto.ChangeEpisodeSeasonInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.episodeService.changeEpisodeSeason(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => EpisodeOutputDto.GetLastEpisodeNumberBySeasonIdOutput)
  async getLastEpisodeNumberBySeasonId(
    @Args('GetSeasonBySeriesIdParams') param: EpisodeInputDto.GetNextEpisodeNumberParams,
  ): Promise<EpisodeOutputDto.GetLastEpisodeNumberBySeasonIdOutput> {
    try {
      return this.episodeService.getLastEpisodeNumberBySeasonId(param);
    } catch (error) {
      throw new Error(error);
    }
  }
}
