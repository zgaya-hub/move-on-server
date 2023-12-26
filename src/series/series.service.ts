import { Injectable, NotFoundException } from '@nestjs/common';
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
import { MockService } from 'src/mock/mock.service';
import { MediaImageAlreadyAssignedException } from './series.exceptions';

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
      const series = new Series();

      let mediaAdditionalInfo: MediaAdditionalInfo;
      const manager = await this.managerService.findByEmail(currentManage.email);
      const mediaImage = await this.mediaImageService.findMediaImageByIdWithMedia(input.MediaImageId);
      if (mediaImage.series || mediaImage.movie || mediaImage.season || mediaImage.trailer || mediaImage.episode) {
        throw new MediaImageAlreadyAssignedException();
      }

      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, series, this.entitySaveService);

      if (input.MediaAdditionalInfo) {
        mediaAdditionalInfo = await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, series, this.entitySaveService);
      }

      series.manager = manager;
      series.mediaImage = [mediaImage];
      if (input.MediaAdditionalInfo) series.mediaAdditionalInfo = mediaAdditionalInfo;
      series.mediaBasicInfo = mediaBasicInfo;

      this.entitySaveService.push(series);
      await this.entitySaveService.saveMultiple();

      return { isSuccess: true };
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

  async getManagerSeriesWithImageAndBasicInfo(input: SeriesInputDto.GetManagerSeriesWithImageAndBasicInfoInput, currentManager: CurrentManagerType): Promise<Series[]> {
    try {
      const series = this.seriesRepository.findSeriesByManagerId(input.MediaImageType, currentManager.ID).getMany();
      return series;
    } catch (error) {
      throw new Error(error);
    }
  }
}
