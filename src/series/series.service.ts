import { Injectable, NotFoundException } from '@nestjs/common';
import { Season } from '../season/entities/season.entity';
import { EntitySaveService } from '../adapter/save.service';
import { Series } from './entities/series.entity';
import { SeriesRepository } from './series.repository';
import { SeriesInputDto } from './dto/SeriesInput.dto';
import { CommonOutputDto } from '../common/dto/common.dto';
import { ManagerService } from '../manager/manager.service';
import { MediaImageService } from '../media-image/media-image.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaAdditionalInfoService } from '../media-additional-info/media-additional-info.service';
import { MediaAdditionalInfo } from '../media-additional-info/entities/media-additional-info.entity';
import { MockService } from '@/mock/mock.service';
import { MANAGER_SERIES_MOCK } from './series.mock';
import { log } from 'console';

@Injectable()
export class SeriesService {
  constructor(
    private readonly seriesRepository: SeriesRepository,
    private readonly managerService: ManagerService,
    private readonly mediaImageService: MediaImageService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly mediaAdditionalInfoService: MediaAdditionalInfoService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mockService: MockService,
  ) {}

  async createSeries(input: SeriesInputDto.CreateSeriesInput, currentManage: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const season = new Series();

      let mediaAdditionalInfo: MediaAdditionalInfo;

      const manager = await this.managerService.findByEmail(currentManage.email);
      const mediaImage = await this.mediaImageService.findMediaImageById(input.MediaImageId);

      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, season, this.entitySaveService);

      if (input.MediaAdditionalInfo) {
        mediaAdditionalInfo = await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, season, this.entitySaveService);
      }

      season.manager = manager;
      season.mediaImage = [mediaImage];
      if (input.MediaAdditionalInfo) season.mediaAdditionalInfo = mediaAdditionalInfo;
      season.mediaBasicInfo = mediaBasicInfo;

      await season.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async assignSeasonToSeries(seriesId: string, episode: Season, entitySaveService?: EntitySaveService): Promise<Series> {
    try {
      const series = await this.findSeriesById(seriesId);
      if (!series) throw new NotFoundException('Invalid Series specified');

      series.season = [episode];

      if (entitySaveService) {
        entitySaveService.push(series);
      } else {
        await entitySaveService.save();
      }

      return series;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findSeriesById(ID: string): Promise<Series> {
    try {
      const series = await this.seriesRepository.findSeriesById(ID);
      if (!series) {
        throw new NotFoundException('Invalid Series specified');
      }

      return series;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getManagerSeriesWithImageAndBasicInfo(_currentManager: CurrentManagerType): Promise<Series[]> {
    try {
      // const series = this.seriesRepository.findSeriesByManagerId(currentManager.ID);
      const series = this.mockService.generateMockData<Series>(MANAGER_SERIES_MOCK, 5);
      return series;
    } catch (error) {
      throw new Error(error);
    }
  }
}
