import { Injectable } from '@nestjs/common';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { MediaAdditionalInfoInputDto } from './dto/media-additional-info.input.dto';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { EntitySaveService } from '../adapter/save.service';
import { MediaAdditionalInfoRepository } from './media-additional-info.repository';
import { MediaAdditionalInfoNotFoundException } from './media-additional-info.exceptions';
import { CommonOutputDto } from 'src/common/dto/common.dto';

@Injectable()
export class MediaAdditionalInfoService {
  constructor(private readonly entitySaveService: EntitySaveService, private readonly mediaAdditionalInfoRepository: MediaAdditionalInfoRepository) {}

  async createMediaAdditionalInfo(
    input: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput,
    media: MovierMediaType,
    entitySaveService?: EntitySaveService,
  ): Promise<MediaAdditionalInfo> {
    try {
      const mediaAdditionalInfo = new MediaAdditionalInfo();

      mediaAdditionalInfo.genre = input.Genre;
      mediaAdditionalInfo.originCountry = input.OriginCountry;
      mediaAdditionalInfo.originalLanguage = input.OriginalLanguage;
      mediaAdditionalInfo.status = input.Status;

      if (media instanceof Movie) mediaAdditionalInfo.movie = media;
      if (media instanceof Series) mediaAdditionalInfo.series = media;

      if (entitySaveService) {
        entitySaveService.push(mediaAdditionalInfo);
      } else {
        await this.entitySaveService.save<MediaAdditionalInfo>(mediaAdditionalInfo);
      }

      return mediaAdditionalInfo;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateMediaAdditionalInfo(
    mediaAdditionalInfoId: string,
    input: MediaAdditionalInfoInputDto.UpdateMediaAdditionalInfoInput,
    entitySaveService?: EntitySaveService,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const mediaAdditionalInfo = await this.findMediaAdditionalInfoById(mediaAdditionalInfoId);

      if (input.Genre) mediaAdditionalInfo.genre = input.Genre;
      if (input.OriginCountry) mediaAdditionalInfo.originCountry = input.OriginCountry;
      if (input.OriginalLanguage) mediaAdditionalInfo.originalLanguage = input.OriginalLanguage;
      if (input.Status) mediaAdditionalInfo.status = input.Status;

      if (entitySaveService) {
        entitySaveService.push(mediaAdditionalInfo);
      } else {
        await this.entitySaveService.save<MediaAdditionalInfo>(mediaAdditionalInfo);
      }

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMediaAdditionalInfoById(ID: string): Promise<MediaAdditionalInfo> {
    try {
      const mediaAdditionalInfo = await this.mediaAdditionalInfoRepository.findMediaAdditionalInfoById(ID);
      if (!mediaAdditionalInfo) {
        throw new MediaAdditionalInfoNotFoundException();
      }

      return mediaAdditionalInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
