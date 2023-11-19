import { Injectable, NotFoundException } from '@nestjs/common';
import { MediaImageInputDto } from './dto/media-image.input.dto';
import { MediaImage } from './entities/media-image.entity';
import { Transactional } from 'typeorm-transactional';
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

@Injectable()
export class MediaImageService {
  constructor(private readonly cloudinaryService: CloudinaryService, private readonly mediaImageRepository: MediaImageRepository) {}

  @Transactional()
  async createMediaImage(input: MediaImageInputDto.MediaImageCreateInput): Promise<MediaImageOutputDto.MediaImageIdOutput> {
    try {
      const mediaImage = new MediaImage();

      mediaImage.mediaImageType = input.mediaImageType;
      mediaImage.mediaImageUrl = input.mediaImageUrl;

      await mediaImage.save();

      return { mediaImageId: mediaImage.ID };
    } catch (error) {
      throw new Error(error);
    }
  }

  async uploadMediaImage(input: MediaImageInputDto.MediaImageUploadInput): Promise<MediaImageOutputDto.MediaImageIdOutput> {
    try {
      const uploadedImage = await this.cloudinaryService.uploadImageOnCloudinary({ base64: input.mediaImageBase64 });
      const createdMediaImage = await this.createMediaImage({ mediaImageType: input.mediaImageType, mediaImageUrl: uploadedImage.imageUrl });

      return createdMediaImage;
    } catch (error) {
      throw new Error(error);
    }
  }

  async assignMediaImageToMedia(mediaImageId: string, media: MovierMediaType, entitySaveService?: EntitySaveService): Promise<MediaImage> {
    try {
      const mediaImage = await this.findMediaImageById(mediaImageId);
      if (!mediaImage) throw new NotFoundException('Invalid MediaImage specified');

      if (media instanceof Movie) mediaImage.movie = media;
      if (media instanceof Episode) mediaImage.episode = media;
      if (media instanceof Trailer) mediaImage.trailer = media;
      if (media instanceof Series) mediaImage.series = media;
      if (media instanceof Season) mediaImage.season = media;

      if (entitySaveService) {
        entitySaveService.push(media);
      } else {
        await media.save();
      }

      return mediaImage;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMediaImageById(ID: string): Promise<MediaImage> {
    try {
      const mediaImage = await this.mediaImageRepository.findMediaImageById(ID);
      if (!mediaImage) throw new NotFoundException('Invalid Media Image specified');
      return mediaImage;
    } catch (error) {
      throw new Error(error);
    }
  }
}
