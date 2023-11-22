import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EpisodeService } from './episode.service';
import { Episode } from './entities/episode.entity';
import { CommonOutputDto } from '../common/dto/common.dto';
import { EpisodeInputDto } from './dto/episode.input.dto';
import { UseGuards } from '@nestjs/common';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';

@Resolver(() => Episode)
@UseGuards(JwtManagerAuthGuard)
export class EpisodeResolver {
  constructor(private readonly episodeService: EpisodeService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createEpisode(
    @Args('CreateMovieInput')
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
}
