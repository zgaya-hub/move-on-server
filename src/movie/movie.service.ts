import { Injectable } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Movie } from './entities/movie.entity';
import { MovieInputDto } from './dto/movie.input.dto';
import { Transactional } from 'typeorm-transactional';
import { ManagerService } from '../manager/manager.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaAdditionalInfo } from '../media-additional-info/entities/media-additional-info.entity';
import { MediaAdditionalInfoService } from '../media-additional-info/media-additional-info.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { AchievementInfoService } from '../achievement-info/achievement-info.service';
import { AchievementInfo } from '../achievement-info/entities/achievement-info.entity';
import { MediaResourceService } from '../media-resource/media-resource.service';

@Injectable()
export class MovieService {
  constructor(
    private readonly videoService: VideoService,
    private readonly mediaAdditionalInfoService: MediaAdditionalInfoService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly achievementInfoService: AchievementInfoService,
    private readonly managerService: ManagerService,
    private readonly mediaResourceService: MediaResourceService,
  ) {}

  @Transactional()
  async createMovie(input: MovieInputDto.CreateMovieInput, currentManager: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const movie = new Movie();
      let mediaAdditionalInfo: MediaAdditionalInfo;
      let achievementInfo: AchievementInfo;

      const manager = await this.managerService.findByEmail(currentManager.email);

      const video = await this.videoService.assignVideoToMedia(input.VideoId, movie);
      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, movie);
      const mediaResource = await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, movie);

      if (input.MediaAdditionalInfo) {
        mediaAdditionalInfo = await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, movie);
      }

      if (input.AchievementInfo) {
        achievementInfo = await this.achievementInfoService.createAchievementInfo(input.AchievementInfo, movie);
      }

      movie.video = video;
      movie.manager = manager;
      movie.mediaBasicInfo = mediaBasicInfo;
      movie.mediaResource = mediaResource;
      if (input.MediaAdditionalInfo) movie.mediaAdditionalInfo = mediaAdditionalInfo;
      if (input.AchievementInfo) movie.achievementInfo = achievementInfo;

      await movie.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }
}
