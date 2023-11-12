import { Injectable } from '@nestjs/common';
import { MediaBasicInfoInputDto } from './dto/media-basic-info.input.dto';
import { Transactional } from 'typeorm-transactional';
import { MediaBasicInfo } from './entities/media-basic-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { Movie } from '../movie/entities/movie.entity';
import { Episode } from '../episode/entities/episode.entity';
import { Trailer } from '../trailer/entities/trailer.entity';
import { Season } from '../season/entities/season.entity';
import { Series } from '../series/entities/series.entity';

@Injectable()
export class MediaBasicInfoService {
  @Transactional()
  async createMediaBasicInfo(input: MediaBasicInfoInputDto.CreateMediaBasicInfoInput, media: MovierMediaType): Promise<MediaBasicInfo> {
    try {
      const mediaBasicInfo = new MediaBasicInfo();

      mediaBasicInfo.mediaTitle = input.Title;
      mediaBasicInfo.mediaPlotSummary = input.PlotSummary;
      mediaBasicInfo.mediaReleaseDate = input.ReleaseDate;

      if (media instanceof Movie) mediaBasicInfo.movie = media;
      if (media instanceof Episode) mediaBasicInfo.episode = media;
      if (media instanceof Trailer) mediaBasicInfo.trailer = media;
      if (media instanceof Season) mediaBasicInfo.season = media;
      if (media instanceof Series) mediaBasicInfo.series = media;

      await mediaBasicInfo.save();

      return mediaBasicInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
