import { Injectable } from '@nestjs/common';
import { MediaImageInputDto } from './dto/media-image.input.dto';
import { MediaImage } from './entities/media-image.entity';
import { Transactional } from 'typeorm-transactional';
import { MediaImageOutputDto } from './dto/media-image.output.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class MediaImageService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

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
      const a = await this.cloudinaryService.uploadImageOnCloudinary({ base64: input.mediaImageBase64 });
      const mediaImageId = await this.createMediaImage({ mediaImageType: input.mediaImageType, mediaImageUrl: a.imageUrl });

      return mediaImageId;
    } catch (error) {
      throw new Error(error);
    }
  }
}
