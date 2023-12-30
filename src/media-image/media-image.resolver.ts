import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { MediaImageService } from './media-image.service';
import { MediaImage } from './entities/media-image.entity';
import { MediaImageInputDto } from './dto/media-image.input.dto';
import { ImageValidatorPipe } from './image-validator/image-validator.pipe';
import { MediaImageOutputDto } from './dto/media-image.output.dto';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CommonOutputDto } from '../common/dto/common.dto';

@Resolver(() => MediaImage)
@UseGuards(JwtManagerAuthGuard)
export class MediaImageResolver {
  constructor(private readonly mediaImageService: MediaImageService) {}

  @Mutation(() => MediaImageOutputDto.MediaImageIdOutput)
  async createMediaImage(@Args('CreateMediaImageInput', ImageValidatorPipe) input: MediaImageInputDto.CreateMediaImageInput): Promise<MediaImageOutputDto.MediaImageIdOutput> {
    try {
      return this.mediaImageService.createMediaImage(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async changeThumbnailImage(@Args('ChangeThumbnailImageInput', ImageValidatorPipe) input: MediaImageInputDto.ChangeThumbnailImageInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      // TODO: will change actual ID
      return this.mediaImageService.changeThumbnailImage('', input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
