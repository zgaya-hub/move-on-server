import { Injectable, PipeTransform } from '@nestjs/common';
import { UnsupportedMediaTypeException, PayloadTooLargeException } from '@nestjs/common';
import { VideoInputDto } from '../dto/video.input.dto';

@Injectable()
export class VideoValidatorPipe implements PipeTransform {
  private readonly MAX_SHORT_SIZE_IN_KB = 204800;
  private readonly MAX_MOVIE_SIZE_IN_KB = 6291456;
  private readonly VALID_IMAGE_MIME_TYPES: VideoMineType[] = ['video/mp4', 'video/webm', 'video/avi', 'video/mpeg'];

  transform(video: VideoInputDto.GetUploadVideoSignedUrlInput): VideoInputDto.GetUploadVideoSignedUrlInput {
    const fileMimeType = video.Mime as VideoMineType;

    if (!this.VALID_IMAGE_MIME_TYPES.includes(fileMimeType)) {
      throw new UnsupportedMediaTypeException('Invalid MIME specified');
    }

    if (video.IsShort) {
      if (this.MAX_SHORT_SIZE_IN_KB < video.SizeInKb) {
        throw new PayloadTooLargeException('Short is too large');
      }
    }

    if (this.MAX_MOVIE_SIZE_IN_KB < video.SizeInKb) {
      throw new PayloadTooLargeException('Video is too large');
    }

    return video;
  }
}
