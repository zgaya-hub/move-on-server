import { Injectable } from '@nestjs/common';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { MediaAdditionalInfoInputDto } from './dto/media-additional-info.input.dto';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { EntitySaveService } from '../adapter/save.service';

@Injectable()
export class MediaAdditionalInfoService {
  constructor(private readonly entitySaveService: EntitySaveService) {}

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
}
