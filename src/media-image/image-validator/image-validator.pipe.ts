import { Injectable, NotAcceptableException, PayloadTooLargeException, PipeTransform, UnsupportedMediaTypeException } from '@nestjs/common';
import { MediaImageInputDto } from '../dto/media-image.input.dto';
import { imageSize } from 'image-size';
import { handleOnBase64ToBuffer } from 'src/utilities/function/base64ToBuffer';
import { MediaImageVariantEnum } from 'src/common/enum/common.enum';

@Injectable()
export class ImageValidatorPipe implements PipeTransform {
  private readonly THUMBNAIL_MAX_RATIO_THRESHOLD = 1.78;
  private readonly THUMBNAIL_MIN_RATIO_THRESHOLD = 1.2;
  private readonly BACKDROP_MAX_RATIO_THRESHOLD = 2.5;
  private readonly BACKDROP_MIN_RATIO_THRESHOLD = 2.0;
  private readonly MAX_SIZE_IN_KB = 6144;
  private readonly VALID_IMAGE_MIME_TYPES: ImageMimeType[] = ['image/gif', 'image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

  transform(image: MediaImageInputDto.CreateMediaImageInput): MediaImageInputDto.CreateMediaImageInput {
    const { Base64, Mime, Variant } = image;

    if (!this.VALID_IMAGE_MIME_TYPES.includes(Mime)) {
      throw new UnsupportedMediaTypeException('Invalid MIME type specified');
    }

    switch (Variant) {
      case MediaImageVariantEnum.THUMBNAIL:
        this.validateAspectRatio(Base64, this.THUMBNAIL_MIN_RATIO_THRESHOLD, this.THUMBNAIL_MAX_RATIO_THRESHOLD, 'thumbnail');
        this.validateSize(Base64, 'thumbnail');
        break;
      case MediaImageVariantEnum.BACKDROP:
        this.validateAspectRatio(Base64, this.BACKDROP_MIN_RATIO_THRESHOLD, this.BACKDROP_MAX_RATIO_THRESHOLD, 'backdrop');
        this.validateSize(Base64, 'backdrop');
        break;
    }

    return image;
  }

  private validateAspectRatio(base64: string, minRatio: number, maxRatio: number, imageType: string) {
    const { height, width } = this.getDimensionByBase64(base64);
    const aspectRatio = width / height;

    if (aspectRatio < minRatio || aspectRatio > maxRatio) {
      throw new NotAcceptableException(`Invalid dimensions for ${imageType} image`);
    }
  }

  private validateSize(base64: string, imageType: string) {
    const fileSizeInByte = handleOnBase64ToBuffer(base64).length;
    const fileSizeInKB = fileSizeInByte / 1024;

    if (fileSizeInKB > this.MAX_SIZE_IN_KB) {
      throw new PayloadTooLargeException(`${imageType} image is too large`);
    }
  }

  private getDimensionByBase64(base64: string): DimentionType {
    const buffer = handleOnBase64ToBuffer(base64);
    const dimension = imageSize(buffer);

    if (!dimension || !dimension.width || !dimension.height) {
      throw new NotAcceptableException('Invalid image dimensions');
    }

    return { width: dimension.width, height: dimension.height };
  }
}
