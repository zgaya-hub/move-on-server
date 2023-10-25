import { Injectable, PipeTransform } from '@nestjs/common';
import { UnsupportedMediaTypeException, PayloadTooLargeException } from '@nestjs/common';
import { VideoInputDto } from '../dto/video.input.dto';

@Injectable()
export class VideoValidatorPipe implements PipeTransform {
  private options: VideoValidatorOptionType = {
    mime: ['video/avi', 'video/mp4', 'video/mpeg', 'video/webm'],
    movieSizeThreshold: 6144, // in MB
    shortSizeThreshold: 200, // in MB
  };

  transform(video: VideoInputDto.GetS3UploadVdeoUrlInput): VideoInputDto.GetS3UploadVdeoUrlInput {
    const { mime, movieSizeThreshold, shortSizeThreshold } = this.options;

    const fileMimeType = video.mime as VideoMineType;

    if (!mime.includes(fileMimeType)) {
      throw new UnsupportedMediaTypeException('Invalid MIME specified');
    }

    const videoSizeInMB = this.convertByteToMB(video.size);

    if (video.isShort) {
      if (shortSizeThreshold < videoSizeInMB) {
        throw new PayloadTooLargeException('Short is too large');
      }
    }

    if (movieSizeThreshold < videoSizeInMB) {
      throw new PayloadTooLargeException('Video is too large');
    }

    return video;
  }

  private convertByteToMB(byte: number): number {
    return byte / (1024 * 1024); // 1 MB = 1024 KB, 1 KB = 1024 byte
  }
}
