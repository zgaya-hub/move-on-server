import { Injectable } from '@nestjs/common';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { MediaAdditionalInfoInputDto } from './dto/media-additional-info.input.dto';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class MediaAdditionalInfoService {
  @Transactional()
  async createMediaAdditionalInfo(input: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput, media: MovierMediaType): Promise<MediaAdditionalInfo> {
    try {
      const mediaAdditionalInfo = new MediaAdditionalInfo();

      mediaAdditionalInfo.mediaGenre = input.Genre;
      mediaAdditionalInfo.mediaOriginCountry = input.OriginCountry;
      mediaAdditionalInfo.mediaOriginalLanguage = input.OriginalLanguage;
      mediaAdditionalInfo.mediaStatus = input.Status;

      if (media instanceof Movie) mediaAdditionalInfo.movie = media;
      if (media instanceof Series) mediaAdditionalInfo.series = media;

      mediaAdditionalInfo.save();

      return mediaAdditionalInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
