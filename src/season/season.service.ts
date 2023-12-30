import { Injectable, NotFoundException } from '@nestjs/common';
import { Season } from './entities/season.entity';
import { EntitySaveService } from '../adapter/save.service';
import { SeasonRepository } from './season.repository';
import { SeasonInputDto } from './dto/season.input.dto';
import { CommonOutputDto } from '../common/dto/common.dto';
import { SeriesService } from '../series/series.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaImageService } from '../media-image/media-image.service';
import { SeasonOutputDto } from './dto/season.output.dto';

@Injectable()
export class SeasonService {
  constructor(
    private readonly seasonRepository: SeasonRepository,
    private readonly seriesService: SeriesService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly mediaImageService: MediaImageService,
  ) {}

  async createSeason(input: SeasonInputDto.CreateSeasonInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const season = new Season();

      const series = await this.seriesService.findSeriesById(input.SeriesId);

      await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, season, this.entitySaveService);
      await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, season, this.entitySaveService);

      season.number = input.Number;
      season.series = series;

      this.entitySaveService.push(season);
      await this.entitySaveService.saveMultiple();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSeasonBySeriesId(params: SeasonInputDto.GetSeasonBySeriesIdParams): Promise<Season[]> {
    try {
      const season = await this.seasonRepository.getSeasonBySeriesId(params.SeriesId).getMany();
      return season;
    } catch (error) {
      throw new Error(error);
    }
  }

  async changeSeasonSeries(input: SeasonInputDto.ChangeSeasonSeriesInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const season = await this.findSeasonById(input.SeasonId);
      const series = await this.seriesService.findSeriesById(input.SeriesId);

      season.series = series;

      await season.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNextSeasonNumber(seriesId: string): Promise<SeasonOutputDto.GetNextSeasonNumberOutput> {
    try {
      const season = await this.seasonRepository.findLastSeasonBySeriesId(seriesId).select(['number']).getOne();

      return { number: season.number + 1 };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findSeasonById(ID: string): Promise<Season> {
    try {
      const season = await this.seasonRepository.findSeasonById(ID);
      if (!season) {
        throw new NotFoundException('Invalid Season specified');
      }

      return season;
    } catch (error) {
      throw new Error(error);
    }
  }
}
