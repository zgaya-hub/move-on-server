import { Injectable, PipeTransform } from '@nestjs/common';
import { UnsupportedMediaTypeException, PayloadTooLargeException } from '@nestjs/common';
import { VideoInputDto } from '../dto/video.input.dto';

@Injectable()
export class VideoValidatorPipe implements PipeTransform {
  private options: VideoValidatorOptionType = {
    mime: ['video/avi', 'video/mp4', 'video/mpeg', 'video/webm'],
    movieSizeThreshold: 6291456, // 6 GB in KB
    shortSizeThreshold: 204800, // 200 MB in KB
  };

  transform(video: VideoInputDto.GetS3UploadVdeoUrlInput): VideoInputDto.GetS3UploadVdeoUrlInput {
    const { mime, movieSizeThreshold, shortSizeThreshold } = this.options;

    const fileMimeType = video.mime as VideoMineType;

    if (!mime.includes(fileMimeType)) {
      throw new UnsupportedMediaTypeException('Invalid MIME specified');
    }

    if (video.isShort) {
      if (shortSizeThreshold < video.sizeInKb) {
        throw new PayloadTooLargeException('Short is too large');
      }
    }

    if (movieSizeThreshold < video.sizeInKb) {
      throw new PayloadTooLargeException('Video is too large');
    }

    return video;
  }
}
