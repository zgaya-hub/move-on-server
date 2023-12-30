import { Injectable } from '@nestjs/common';
import { AchievementInfoInputDto } from './dto/achievement-info.input.dto';
import { AchievementInfo } from './entities/achievement-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { EntitySaveService } from '../adapter/save.service';

@Injectable()
export class AchievementInfoService {
  constructor(private readonly entitySaveService: EntitySaveService) {}

  async createAchievementInfo(input: AchievementInfoInputDto.CreateAchievementInfoInput, media: MovierMediaType, entitySaveService?: EntitySaveService): Promise<AchievementInfo> {
    try {
      const achievementInfo = new AchievementInfo();

      achievementInfo.IMDbRating = input.IMDbRating;
      achievementInfo.OMDbRating = input.OMDbRating;
      achievementInfo.award = input.Award;

      if (media instanceof Movie) achievementInfo.movie = media;
      if (media instanceof Series) achievementInfo.series = media;

      if (entitySaveService) {
        entitySaveService.push(achievementInfo);
      } else {
        await this.entitySaveService.save<AchievementInfo>(achievementInfo);
      }

      return achievementInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
