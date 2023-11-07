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
      const newMediaImage = new MediaImage();

      newMediaImage.mediaImageType = input.mediaImageType;
      newMediaImage.mediaImageUrl = input.mediaImageUrl;

      await newMediaImage.save();

      return { mediaImageId: newMediaImage.ID };
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
}
