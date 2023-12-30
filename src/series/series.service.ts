import { Injectable, NotFoundException } from '@nestjs/common';
import { EntitySaveService } from '../adapter/save.service';
import { Series } from './entities/series.entity';
import { SeriesRepository } from './series.repository';
import { SeriesInputDto } from './dto/series.input.dto';
import { SeriesOutputDto } from './dto/series.output.dto';
import { CommonOutputDto } from '../common/dto/common.dto';
import { ManagerService } from '../manager/manager.service';
import { MediaImageService } from '../media-image/media-image.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaAdditionalInfoService } from '../media-additional-info/media-additional-info.service';
import { flatMap } from 'lodash';

@Injectable()
export class SeriesService {
  constructor(
    private readonly seriesRepository: SeriesRepository,
    private readonly managerService: ManagerService,
    private readonly mediaImageService: MediaImageService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly mediaAdditionalInfoService: MediaAdditionalInfoService,
    private readonly entitySaveService: EntitySaveService,
  ) {}

  async createSeries(input: SeriesInputDto.CreateSeriesInput, currentManage: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const series = new Series();

      const manager = await this.managerService.findByEmail(currentManage.email);

      await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, series, this.entitySaveService);
      await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, series, this.entitySaveService);
      await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, series, this.entitySaveService);

      series.manager = manager;

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

  async getManagerSeriesWithImageAndBasicInfo(currentManager: CurrentManagerType): Promise<Series[]> {
    try {
      const series = await this.seriesRepository.findSeriesByManagerId(currentManager.ID).getMany();
      return series;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getManagerSeriesForTable(input: SeriesInputDto.GetManagerSeriesForTableInput, currentManager: CurrentManagerType): Promise<SeriesOutputDto.GetManagerSeriesForTableOutput> {
    try {
      const series = await this.seriesRepository.getManagerSeriesForTable(input.PageSize, input.Page, currentManager.ID).getMany();
      const totalRecords = await this.seriesRepository.findSeriesByManagerId(currentManager.ID).getCount();

      const flatSeries = series.map((series) => {
        return {
          ID: series.ID,
          createdAt: series.createdAt,
          updatedAt: series.updatedAt,
          mediaTitle: series.mediaBasicInfo.mediaTitle,
          mediaPlotSummary: series.mediaBasicInfo.mediaPlotSummary,
          mediaReleaseDate: series.mediaBasicInfo.mediaReleaseDate,
          mediaOriginCountry: series.mediaAdditionalInfo.mediaOriginCountry,
          mediaOriginalLanguage: series.mediaAdditionalInfo.mediaOriginalLanguage,
          mediaGenre: series.mediaAdditionalInfo.mediaGenre,
          mediaStatus: series.mediaAdditionalInfo.mediaStatus,
          mediaImageUrl: series.mediaImage.mediaImageUrl,
        };
      });

      return { seriesList: flatSeries, totalRecords };
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteSeriesById(params: SeriesInputDto.DeleteSeriesByIdParams): Promise<CommonOutputDto.SuccessOutput> {
    try {
      await this.seriesRepository.deleteSeriesById(params.SeriesId);
      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }
}
