import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ImageInputDto } from './dto/image.input.dto';
import { Image } from './entities/image.entity';
import { ImageOutputDto } from './dto/image.output.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { ImageAssignerType } from '../common/types/Common.type';
import { ImageRepository } from './image.repository';
import { Movie } from '../movie/entities/movie.entity';
import { Episode } from '../episode/entities/episode.entity';
import { Trailer } from '../trailer/entities/trailer.entity';
import { Series } from '../series/entities/series.entity';
import { Season } from '../season/entities/season.entity';
import { EntitySaveService } from '../adapter/save.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { ALREADY_IN_USE_ERROR_ID, NOT_FOUND_ERROR_ID } from './image.error-codes';
import { Cineast } from 'src/cineast/entities/cineast.entity';

@Injectable()
export class ImageService {
  constructor(private readonly cloudinaryService: CloudinaryService, private readonly imageRepository: ImageRepository, private readonly entitySaveService: EntitySaveService) {}

  async createImage(input: ImageInputDto.CreateImageInput): Promise<ImageOutputDto.ImageIdOutput> {
    try {
      const image = new Image();

      const uploadedImage = await this.cloudinaryService.uploadImageOnCloudinary({ Base64: input.Base64 });

      image.variant = input.Variant;
      image.url = uploadedImage.imageUrl;

      await this.entitySaveService.save<Image>(image);

      return { ID: image.ID };
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateImage(imageId: string, input: ImageInputDto.UpdateImageInput, entitySaveService?: EntitySaveService): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const image = await this.findImageById(imageId);

      if (input.Url) image.url = input.Url;
      if (input.Variant) image.variant = input.Variant;

      if (entitySaveService) {
        entitySaveService.push(image);
      } else {
        await this.entitySaveService.save<Image>(image);
      }

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async changeThumbnailImage(ID: string, input: ImageInputDto.ChangeThumbnailImageInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const image = await this.findImageById(ID);

      const uploadedImage = await this.cloudinaryService.uploadImageOnCloudinary({ Base64: input.Base64 });
      image.url = uploadedImage.imageUrl;

      await image.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async assignImageToMedia(imageId: string, assigner: ImageAssignerType, entitySaveService?: EntitySaveService): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const image = await this.findImageByIdWithMedia(imageId);
      if (image.series || image.movie || image.season || image.trailer || image.episode) {
        throw new ConflictException(ALREADY_IN_USE_ERROR_ID);
      }

      if (assigner instanceof Movie) image.movie = assigner;
      if (assigner instanceof Episode) image.episode = assigner;
      if (assigner instanceof Trailer) image.trailer = assigner;
      if (assigner instanceof Series) image.series = assigner;
      if (assigner instanceof Season) image.season = assigner;
      if (assigner instanceof Cineast) image.cineast = assigner;

      if (entitySaveService) {
        entitySaveService.push(image);
      } else {
        await this.entitySaveService.save<Image>(image);
      }

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getImageByMediaId(mediaId: string): Promise<Image> {
    try {
      const image = await this.imageRepository.findImageByMediaId(mediaId).getOne();
      if (!image) {
        throw new NotFoundException(NOT_FOUND_ERROR_ID);
      }

      return image;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findImageById(imageId: string): Promise<Image> {
    try {
      const image = await this.imageRepository.findImageById(imageId);
      if (!image) {
        throw new NotFoundException('Invalid Media Image specified');
      }

      return image;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findImageByIdWithMedia(imageId: string): Promise<Image> {
    try {
      const image = await this.imageRepository.findImageByIdWithMedia(imageId).getOne();
      if (!image) {
        throw new NotFoundException('Invalid Media Image specified');
      }

      return image;
    } catch (error) {
      throw new Error(error);
    }
  }
}
