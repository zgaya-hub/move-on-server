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

      mediaAdditionalInfo.mediaGenre = input.MediaGenre;
      mediaAdditionalInfo.mediaOriginCountry = input.MediaOriginCountry;
      mediaAdditionalInfo.mediaOriginalLanguage = input.MediaOriginalLanguage;
      mediaAdditionalInfo.mediaStatus = input.MediaStatus;

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

      if (input.MediaGenre) mediaAdditionalInfo.mediaGenre = input.MediaGenre;
      if (input.MediaOriginCountry) mediaAdditionalInfo.mediaOriginCountry = input.MediaOriginCountry;
      if (input.MediaOriginalLanguage) mediaAdditionalInfo.mediaOriginalLanguage = input.MediaOriginalLanguage;
      if (input.MediaStatus) mediaAdditionalInfo.mediaStatus = input.MediaStatus;

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
