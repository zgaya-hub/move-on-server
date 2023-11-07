import { Injectable, NotFoundException } from '@nestjs/common';
import { AwsS3Service } from '../aws/aws-s3/aws-s3.service';
import { VideoInputDto } from './dto/video.input.dto';
import { VideoOutputDto } from './dto/video.output.dto';
import { Video } from './entities/video.entity';
import { handleOnGetVideoQualityBySize } from './utils/getVideoQualityBySize';
import { Transactional } from 'typeorm-transactional';
import { MovierMediaType } from '../common/types/Common.type';
import { VideoRepository } from './video.repository';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';
import { Season } from '../season/entities/season.entity';
import { Episode } from '../episode/entities/episode.entity';

@Injectable()
export class VideoService {
  constructor(private readonly awsS3Service: AwsS3Service, private readonly videoRepository: VideoRepository) {}

  async getS3UploadVideoUrl(
    input: VideoInputDto.GetS3UploadVdeoUrlInput,
    currentManager: CurrentManagerType,
  ): Promise<VideoOutputDto.GetS3UploadVdeoUrlOutput> {
    const signedUrl = await this.awsS3Service.generateMovieUploadUrl(input.mime, input.mime, currentManager);
    const video = await this.createVideoInfo(input, currentManager);

    return { url: signedUrl, videoInfoId: video.ID };
  }

  @Transactional()
  async createVideoInfo(input: VideoInputDto.GetS3UploadVdeoUrlInput, currentManager: CurrentManagerType): Promise<Video> {
    try {
      const video = new Video();

      video.videoHeight = input.height;
      video.videoWidth = input.width;
      video.videoMime = input.mime;
      video.videoSizeInKb = input.sizeInKb;
      video.videoQuality = handleOnGetVideoQualityBySize(input.width, input.height);
      video.videoRunTime = input.runTime;
      video.managerId = currentManager.ID;

      await video.save();

      return video;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Transactional()
  async assignVideoToMedia(videoId: string, media: MovierMediaType): Promise<Video> {
    try {
      const video = await this.findVideoById(videoId);
      if (!video) throw new NotFoundException('Invalid Video specified');

      if (media instanceof Movie) video.movie = media;
      if (media instanceof Series) video.series = media;
      if (media instanceof Season) video.season = media;
      if (media instanceof Episode) video.episode = media;

      await media.save();

      // this.videoRepository.update(1, video);

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
