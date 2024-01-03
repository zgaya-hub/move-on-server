import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Episode } from './entities/episode.entity';
import { EpisodeInputDto } from './dto/episode.input.dto';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaResourceService } from '../media-resource/media-resource.service';
import { EntitySaveService } from '../adapter/save.service';
import { ImageService } from '../image/image.service';
import { SeasonService } from '../season/season.service';
import { EpisodeRepository } from './episode.repository';
import { EpisodeOutputDto } from './dto/episode.output.dto';

@Injectable()
export class EpisodeService {
  constructor(
    private readonly videoService: VideoService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly seasonService: SeasonService,
    private readonly mediaResourceService: MediaResourceService,
    private readonly entitySaveService: EntitySaveService,
    private readonly episodeRepository: EpisodeRepository,
    private readonly imageService: ImageService,
  ) {}

  async createEpisode(input: EpisodeInputDto.CreateEpisodeInput): Promise<EpisodeOutputDto.EpisodeIdOutput> {
    try {
      const episode = new Episode();

      const season = await this.seasonService.findSeasonById(input.SeasonId);

      await this.videoService.assignVideoToMedia(input.VideoId, episode, this.entitySaveService);
      await this.imageService.assignImageToMedia(input.ImageId, episode, this.entitySaveService);
      await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, episode, this.entitySaveService);
      await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, episode, this.entitySaveService);

      episode.season = season;
      episode.number = input.Number;

      this.entitySaveService.push(episode);
      await this.entitySaveService.saveMultiple();

      return { ID: episode.ID };
    } catch (error) {
      throw new Error(error);
    }
  }

  async changeEpisodeSeason(input: EpisodeInputDto.ChangeEpisodeSeasonInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const episode = await this.findEpisodeById(input.EpisodeId);
      const season = await this.seasonService.findSeasonById(input.SeasonId);

      episode.season = season;

      await episode.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNextEpisodeNumber(seasonId: string): Promise<EpisodeOutputDto.GetNextEpisodeNumberOutput> {
    try {
      const episode = await this.episodeRepository.findLastEpisodeBySeasonId(seasonId).getOne();

      return { number: (episode?.number ?? 0) + 1 };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findEpisodeById(id: string): Promise<Episode> {
    try {
      const episode = await this.episodeRepository.findEpisodeById(id);
      if (!episode) {
        throw new NotFoundException('Invalid Episode specified');
      }

      return episode;
    } catch (error) {
      throw new Error(error);
    }
  }
}
