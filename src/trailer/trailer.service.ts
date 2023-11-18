import { Injectable } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Trailer } from './entities/trailer.entity';
import { TrailerInputDto } from './dto/trailer.input.dto';
import { Transactional } from 'typeorm-transactional';
import { ManagerService } from '../manager/manager.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaAdditionalInfo } from '../media-additional-info/entities/media-additional-info.entity';
import { MediaAdditionalInfoService } from '../media-additional-info/media-additional-info.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { AchievementInfoService } from '../achievement-info/achievement-info.service';
import { AchievementInfo } from '../achievement-info/entities/achievement-info.entity';
import { MediaResourceService } from '../media-resource/media-resource.service';
import { EntitySaveService } from '../adapter/save.service';

@Injectable()
export class TrailerService {
  constructor(
    private readonly videoService: VideoService,
    private readonly mediaAdditionalInfoService: MediaAdditionalInfoService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly achievementInfoService: AchievementInfoService,
    private readonly managerService: ManagerService,
    private readonly mediaResourceService: MediaResourceService,
    private readonly entitySaveService: EntitySaveService,
  ) {}

  @Transactional()
  async createTrailer(input: TrailerInputDto.CreateTrailerInput, currentManager: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const trailer = new Trailer();

      let mediaAdditionalInfo: MediaAdditionalInfo;
      let achievementInfo: AchievementInfo;

      const manager = await this.managerService.findByEmail(currentManager.email);
      const video = await this.videoService.assignVideoToMedia(input.VideoId, trailer, this.entitySaveService);
      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, trailer, this.entitySaveService);
      const mediaResource = await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, trailer, this.entitySaveService);

      if (input.MediaAdditionalInfo) {
        mediaAdditionalInfo = await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, trailer, this.entitySaveService);
      }

      if (input.AchievementInfo) {
        achievementInfo = await this.achievementInfoService.createAchievementInfo(input.AchievementInfo, trailer, this.entitySaveService);
      }

      trailer.video = video;
      trailer.manager = manager;
      trailer.mediaResource = mediaResource;
      trailer.mediaBasicInfo = mediaBasicInfo;
      trailer.cast;
      trailer.crew;
      trailer.mediaImage;
      trailer.externalLink;
      trailer.review;

      this.entitySaveService.push(trailer);
      await this.entitySaveService.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }
}
