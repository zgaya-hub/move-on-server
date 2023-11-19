import { Injectable } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Trailer } from './entities/trailer.entity';
import { TrailerInputDto } from './dto/trailer.input.dto';
import { Transactional } from 'typeorm-transactional';
import { ManagerService } from '../manager/manager.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaResourceService } from '../media-resource/media-resource.service';
import { EntitySaveService } from '../adapter/save.service';
import { MediaImageService } from '../media-image/media-image.service';

@Injectable()
export class TrailerService {
  constructor(
    private readonly videoService: VideoService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly managerService: ManagerService,
    private readonly mediaResourceService: MediaResourceService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mediaImageService: MediaImageService,
  ) {}

  @Transactional()
  async createTrailer(input: TrailerInputDto.CreateTrailerInput, currentManager: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const trailer = new Trailer();

      const manager = await this.managerService.findByEmail(currentManager.email);
      const video = await this.videoService.assignVideoToMedia(input.VideoId, trailer, this.entitySaveService);
      const mediaImage = await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, trailer, this.entitySaveService);

      const mediaResource = await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, trailer, this.entitySaveService);
      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, trailer, this.entitySaveService);

      trailer.video = video;
      trailer.manager = manager;
      trailer.mediaResource = mediaResource;
      trailer.mediaBasicInfo = mediaBasicInfo;
      trailer.mediaImage = [mediaImage];

      this.entitySaveService.push(trailer);
      await this.entitySaveService.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }
}
