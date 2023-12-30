import { Injectable, MethodNotAllowedException, NotFoundException } from '@nestjs/common';
import { AwsS3Service } from '../aws/aws-s3/aws-s3.service';
import { VideoInputDto } from './dto/video.input.dto';
import { VideoOutputDto } from './dto/video.output.dto';
import { Video } from './entities/video.entity';
import { handleOnGetVideoQualityBySize } from './utils/getVideoQualityBySize';
import { MovierMediaType } from '../common/types/Common.type';
import { VideoRepository } from './video.repository';
import { Movie } from '../movie/entities/movie.entity';
import { Episode } from '../episode/entities/episode.entity';
import { Trailer } from '../trailer/entities/trailer.entity';
import { EntitySaveService } from '../adapter/save.service';

@Injectable()
export class VideoService {
  constructor(private readonly awsS3Service: AwsS3Service, private readonly videoRepository: VideoRepository) {}

  async getUploadVideoSignedUrl(input: VideoInputDto.GetUploadVideoSignedUrlInput, currentManager: CurrentManagerType): Promise<VideoOutputDto.UploadVideoSignedUrlOutput> {
    if (input.IsShort) {
      throw new MethodNotAllowedException('Shorts feature is currently not supporting');
    }

    const signedUrl = await this.awsS3Service.generateVideoUploadUrl(input.Mime, currentManager, input.MediaType);
    const video = await this.createVideoInfo(input, currentManager);

    return { signedUrl: signedUrl.url, signedUrlKeyId: signedUrl.keyId, videoId: video.ID };
  }

  async createVideoInfo(input: VideoInputDto.GetUploadVideoSignedUrlInput, currentManager: CurrentManagerType): Promise<Video> {
    try {
      const video = new Video();

      video.mime = input.Mime;
      video.width = input.Width;
      video.height = input.Height;
      video.runTime = input.RunTime;
      video.sizeInKb = input.SizeInKb;
      video.managerId = currentManager.ID;
      video.quality = handleOnGetVideoQualityBySize(input.Width, input.Height);

      await video.save();

      return video;
    } catch (error) {
      throw new Error(error);
    }
  }

  async assignVideoToMedia(videoId: string, media: MovierMediaType, entitySaveService?: EntitySaveService): Promise<Video> {
    try {
      const video = await this.findVideoById(videoId);

      if (!video) {
        throw new NotFoundException('Invalid Video specified');
      }

      video.isUsed = true;
      if (media instanceof Movie) video.movie = media;
      if (media instanceof Episode) video.episode = media;
      if (media instanceof Trailer) video.trailer = media;

      if (entitySaveService) {
        entitySaveService.push(video);
      } else {
        await this.videoRepository.update(video.ID, video);
      }

      return video;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findVideoById(videoId: string): Promise<Video> {
    try {
      return this.videoRepository.findVideoById(videoId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
