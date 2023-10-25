import { Injectable, PipeTransform } from '@nestjs/common';
import { VideoInputDto } from '../dto/video.input.dto';

@Injectable()
export class ShortDetectoPipe implements PipeTransform {
  // Define constants for ratio threshold
  private readonly MIN_RATIO_THRESHOLD = 0.3;
  private readonly MAX_RATIO_THRESHOLD = 0.6;

  transform(value: VideoInputDto.GetS3UploadVdeoUrlInput) {
    const isShort = this.isWithinShortThreshold(value.width, value.height);
    if (isShort) {
      value.isShort = true;
    }

    return value;
  }

  private isWithinShortThreshold(width: number, height: number): boolean {
    const aspectRatio = width / height;

    return aspectRatio >= this.MIN_RATIO_THRESHOLD && aspectRatio <= this.MAX_RATIO_THRESHOLD;
  }
}
