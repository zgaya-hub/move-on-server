import { Injectable, NotAcceptableException, PayloadTooLargeException, PipeTransform, UnsupportedMediaTypeException } from '@nestjs/common';
import { MediaImageInputDto } from '../dto/media-image.input.dto';
import { imageSize } from 'image-size';
import { handleOnBase64ToBuffer } from '@/utilities/function/base64ToBuffer';
import { MediaImageTypeEnum } from '@/common/enum/common.enum';

@Injectable()
export class ImageValidatorPipe implements PipeTransform {
  private readonly THUMBNAIL_MAX_RATIO_THRESHOLD = 1.78;
  private readonly THUMBNAIL_MIN_RATIO_THRESHOLD = 1.2;
  private readonly POSTER_MIN_RATIO_THRESHOLD = 1.2;
  private readonly POSTER_MAX_RATIO_THRESHOLD = 2.0;
  private readonly BACKDROP_MAX_RATIO_THRESHOLD = 2.5;
  private readonly BACKDROP_MIN_RATIO_THRESHOLD = 2.0;
  private readonly MAX_SIZE_IN_KB = 4096;
  private readonly VALID_IMAGE_MIME_TYPES: ImageMimeType[] = ['image/gif', 'image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

  transform(image: MediaImageInputDto.CreateMediaImageInput): MediaImageInputDto.CreateMediaImageInput {
    const { MediaImageBase64, MediaImageMime, MediaImageType } = image;

    if (!this.VALID_IMAGE_MIME_TYPES.includes(MediaImageMime)) {
      throw new UnsupportedMediaTypeException('Invalid MIME specified');
    }

    switch (MediaImageType) {
      case MediaImageTypeEnum.THUMBNAIL:
        this.validateAspectRatio(MediaImageBase64, this.THUMBNAIL_MIN_RATIO_THRESHOLD, this.THUMBNAIL_MAX_RATIO_THRESHOLD);
        this.validateSize(MediaImageBase64);
        break;
      case MediaImageTypeEnum.POSTER:
        this.validateAspectRatio(MediaImageBase64, this.POSTER_MIN_RATIO_THRESHOLD, this.POSTER_MAX_RATIO_THRESHOLD);
        this.validateSize(MediaImageBase64);
        break;
      case MediaImageTypeEnum.BACKDROP:
        this.validateAspectRatio(MediaImageBase64, this.BACKDROP_MIN_RATIO_THRESHOLD, this.BACKDROP_MAX_RATIO_THRESHOLD);
        this.validateSize(MediaImageBase64);
        break;
    }

    return image;
  }

  private async validateAspectRatio(base64: string, minRatio: number, maxRatio: number) {
    try {
      const { height, width } = await this.getDimensionByBase64(base64);
      const aspectRatio = width / height;

      if (aspectRatio < minRatio || aspectRatio > maxRatio) {
        throw new NotAcceptableException('Invalid dimentions specified');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  private validateSize(base64: string) {
    try {
      const fileSizeInByte = handleOnBase64ToBuffer(base64).length;
      const fileSizeInKB = fileSizeInByte / 1024;

      if (fileSizeInKB > this.MAX_SIZE_IN_KB) {
        throw new PayloadTooLargeException('Image is too large');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  private async getDimensionByBase64(base64: string): Promise<DimentionType | null> {
    try {
      const buffer = handleOnBase64ToBuffer(base64);
      const dimension = imageSize(buffer);
      return { width: dimension.width, height: dimension.height };
    } catch (error) {
      throw new Error(error);
    }
  }
}
