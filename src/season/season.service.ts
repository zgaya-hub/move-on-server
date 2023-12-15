import { Injectable, NotFoundException } from '@nestjs/common';
import { Season } from './entities/season.entity';
import { EntitySaveService } from '../adapter/save.service';
import { SeasonRepository } from './season.repository';
import { SeasonInputDto } from './dto/season.input.dto';
import { CommonOutputDto } from '../common/dto/common.dto';
import { SeriesService } from '../series/series.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaImageService } from '../media-image/media-image.service';
import { MockService } from '@/mock/mock.service';
import { SERIES_MOCK } from './season.mock';

@Injectable()
export class SeasonService {
  constructor(
    private readonly seasonRepository: SeasonRepository,
    private readonly seriesService: SeriesService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly mediaImageService: MediaImageService,
    private readonly mockService: MockService,
  ) {}

  async createSeason(input: SeasonInputDto.CreateSeasonInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const season = new Season();

      const series = await this.seriesService.assignSeasonToSeries(input.SeriesId, season, this.entitySaveService);

      await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, season, this.entitySaveService);
      await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, season, this.entitySaveService);

      season.seasonNo = input.SeasonNo;
      season.series = series;

      await season.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSeasonBySeriesId(_params: SeasonInputDto.GetSeasonBySeriesIdParams): Promise<Season[]> {
    try {
      // const season = await this.seasonRepository.getSeasonBySeriesId(params.SeriesId).getMany();
      const season = this.mockService.generateMockData<Season>(SERIES_MOCK, 5);
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
