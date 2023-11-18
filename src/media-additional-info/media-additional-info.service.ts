import { Injectable } from '@nestjs/common';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { MediaAdditionalInfoInputDto } from './dto/media-additional-info.input.dto';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { Transactional } from 'typeorm-transactional';
import { EntitySaveService } from '../adapter/save.service';

@Injectable()
export class MediaAdditionalInfoService {
  @Transactional()
  async createMediaAdditionalInfo(
    input: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput,
    media: MovierMediaType,
    entitySaveService?: EntitySaveService,
  ): Promise<MediaAdditionalInfo> {
    try {
      const mediaAdditionalInfo = new MediaAdditionalInfo();

      mediaAdditionalInfo.mediaGenre = input.Genre;
      mediaAdditionalInfo.mediaOriginCountry = input.OriginCountry;
      mediaAdditionalInfo.mediaOriginalLanguage = input.OriginalLanguage;
      mediaAdditionalInfo.mediaStatus = input.Status;

      if (media instanceof Movie) mediaAdditionalInfo.movie = media;
      if (media instanceof Series) mediaAdditionalInfo.series = media;

      if (entitySaveService) {
        entitySaveService.push(mediaAdditionalInfo);
      } else {
        await mediaAdditionalInfo.save();
      }

      return mediaAdditionalInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
