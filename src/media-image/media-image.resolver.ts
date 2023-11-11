import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { MediaImageService } from './media-image.service';
import { MediaImage } from './entities/media-image.entity';
import { MediaImageInputDto } from './dto/media-image.input.dto';
import { ImageValidatorPipe } from './image-validator/image-validator.pipe';
import { MediaImageOutputDto } from './dto/media-image.output.dto';

@Resolver(() => MediaImage)
export class MediaImageResolver {
  constructor(private readonly mediaImageService: MediaImageService) {}

  @Mutation(() => MediaImageOutputDto.MediaImageIdOutput)
  async uploadMediaImage(@Args('MediaImageUploadInput', ImageValidatorPipe) input: MediaImageInputDto.MediaImageUploadInput): Promise<MediaImageOutputDto.MediaImageIdOutput> {
    try {
      return this.mediaImageService.uploadMediaImage(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
