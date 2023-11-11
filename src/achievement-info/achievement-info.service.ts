import { Injectable } from '@nestjs/common';
import { AchievementInfoInputDto } from './dto/achievement-info.input.dto';
import { AchievementInfo } from './entities/achievement-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class AchievementInfoService {
  @Transactional()
  async createAchievementInfo(input: AchievementInfoInputDto.CreateAchievementInfoInput, media: MovierMediaType): Promise<AchievementInfo> {
    try {
      const achievementInfo = new AchievementInfo();

      achievementInfo.mediaIMDbRating = input.IMDbRating;
      achievementInfo.mediaOMDbRating = input.OMDbRating;
      achievementInfo.mediaAward = input.Award;

      if (media instanceof Movie) achievementInfo.movie = media;
      if (media instanceof Series) achievementInfo.series = media;

      achievementInfo.save();

      return achievementInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
