import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ImageService } from './image.service';
import { Image } from './entities/image.entity';
import { ImageInputDto } from './dto/image.input.dto';
import { ImageValidatorPipe } from './image-validator/image-validator.pipe';
import { ImageOutputDto } from './dto/image.output.dto';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CommonOutputDto } from '../common/dto/common.dto';

@Resolver(() => Image)
@UseGuards(JwtManagerAuthGuard)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Mutation(() => ImageOutputDto.ImageIdOutput)
  async createImage(@Args('CreateImageInput', ImageValidatorPipe) input: ImageInputDto.CreateImageInput): Promise<ImageOutputDto.ImageIdOutput> {
    try {
      // const pubSub = new PubSub();
      return this.imageService.createImage(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async changeThumbnailImage(@Args('ChangeThumbnailImageInput', ImageValidatorPipe) input: ImageInputDto.ChangeThumbnailImageInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      // TODO: will change actual ID
      return this.imageService.changeThumbnailImage('', input);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => Image)
  async getImageByMediaId(
    @Args('GetImageByMediaIdParams')
    params: ImageInputDto.GetImageByMediaIdParams,
  ): Promise<Image> {
    try {
      return this.imageService.getImageByMediaId(params.MediaId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
