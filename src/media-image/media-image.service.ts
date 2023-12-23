import { Injectable, NotFoundException } from '@nestjs/common';
import { MediaImageInputDto } from './dto/media-image.input.dto';
import { MediaImage } from './entities/media-image.entity';
import { MediaImageOutputDto } from './dto/media-image.output.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { MovierMediaType } from '../common/types/Common.type';
import { MediaImageRepository } from './media-image.repository';
import { Movie } from '../movie/entities/movie.entity';
import { Episode } from '../episode/entities/episode.entity';
import { Trailer } from '../trailer/entities/trailer.entity';
import { Series } from '../series/entities/series.entity';
import { Season } from '../season/entities/season.entity';
import { EntitySaveService } from '../adapter/save.service';
import { CommonOutputDto } from '../common/dto/common.dto';

@Injectable()
export class MediaImageService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly mediaImageRepository: MediaImageRepository,
    private readonly entitySaveService: EntitySaveService,
  ) {}

  async createMediaImage(input: MediaImageInputDto.CreateMediaImageInput): Promise<MediaImageOutputDto.MediaImageIdOutput> {
    try {
      const mediaImage = new MediaImage();

      const uploadedImage = await this.cloudinaryService.uploadImageOnCloudinary({ base64: input.MediaImageBase64 });

      mediaImage.mediaImageType = input.MediaImageType;
      mediaImage.mediaImageUrl = uploadedImage.imageUrl;

      await this.entitySaveService.save<MediaImage>(mediaImage);

      return { mediaImageId: mediaImage.ID };
    } catch (error) {
      throw new Error(error);
    }
  }

  async changeThumbnailImage(input: MediaImageInputDto.ChangeThumbnailImageInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const mediaImage = await this.findMediaImageById(input.MediaImageId);

      const uploadedImage = await this.cloudinaryService.uploadImageOnCloudinary({ base64: input.MediaImageBase64 });
      mediaImage.mediaImageUrl = uploadedImage.imageUrl;

      await mediaImage.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async assignMediaImageToMedia(mediaImageId: string, media: MovierMediaType, entitySaveService?: EntitySaveService): Promise<MediaImage> {
    try {
      const mediaImage = await this.findMediaImageById(mediaImageId);

      if (media instanceof Movie) mediaImage.movie = media;
      if (media instanceof Episode) mediaImage.episode = media;
      if (media instanceof Trailer) mediaImage.trailer = media;
      if (media instanceof Series) mediaImage.series = media;
      if (media instanceof Season) mediaImage.season = media;

      if (entitySaveService) {
        entitySaveService.push(media);
      } else {
        await this.entitySaveService.save<MediaImage>(mediaImage);
      }

      return mediaImage;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMediaImageById(mediaImageId: string): Promise<MediaImage> {
    try {
      const mediaImage = await this.mediaImageRepository.findMediaImageById(mediaImageId);
      if (!mediaImage) {
        throw new NotFoundException('Invalid Media Image specified');
      }

      return mediaImage;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMediaImageByIdWithMedia(mediaImageId: string): Promise<MediaImage> {
    try {
      const mediaImage = await this.mediaImageRepository.findMediaImageByIdWithMedia(mediaImageId).getOne();
      if (!mediaImage) {
        throw new NotFoundException('Invalid Media Image specified');
      }

      return mediaImage;
    } catch (error) {
      throw new Error(error);
    }
  }
}
