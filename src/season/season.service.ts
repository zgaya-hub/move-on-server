import { Injectable, NotFoundException } from '@nestjs/common';
import { Season } from './entities/season.entity';
import { Episode } from '../episode/entities/episode.entity';
import { EntitySaveService } from '../adapter/save.service';
import { SeasonRepository } from './season.repository';
import { Transactional } from 'typeorm-transactional';
import { SeasonInputDto } from './dto/season.input.dto';
import { CommonOutputDto } from '../common/dto/common.dto';
import { SeriesService } from '../series/series.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaImageService } from '../media-image/media-image.service';

@Injectable()
export class SeasonService {
  constructor(
    private readonly seasonRepository: SeasonRepository,
    private readonly seriesService: SeriesService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly mediaImageService: MediaImageService,
  ) {}

  @Transactional()
  async createSeason(input: SeasonInputDto.CreateSeasonInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const season = new Season();

      const series = await this.seriesService.assignSeasonToSeries(input.SeriesId, season, this.entitySaveService);
      const mediaImage = await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, season, this.entitySaveService);

      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, season, this.entitySaveService);

      season.seasonNo = input.SeasonNo;
      season.series = series;
      season.mediaBasicInfo = mediaBasicInfo;
      season.mediaImage = [mediaImage];

      await season.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async assignEpisodeToSeason(seasonId: string, episode: Episode, entitySaveService?: EntitySaveService): Promise<Season> {
    try {
      const season = await this.findSeasonById(seasonId);
      if (!season) throw new NotFoundException('Invalid Season specified');

      season.episode = [episode];

      if (entitySaveService) {
        entitySaveService.push(season);
      } else {
        await entitySaveService.save();
      }

      return season;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findSeasonById(ID: string): Promise<Season> {
    try {
      const season = await this.seasonRepository.findSeasonById(ID);
      if (!season){
        throw new NotFoundException("Invalid Season specified")
      }

      return season;
    } catch (error) {
      throw new Error(error);
    }
  }
}
