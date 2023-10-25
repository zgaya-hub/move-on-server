import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaImageService } from './media-image.service';
import { MediaImage } from './entities/media-image.entity';
import { CreateMediaImageInput } from './dto/create-media-image.input';
import { UpdateMediaImageInput } from './dto/update-media-image.input';

@Resolver(() => MediaImage)
export class MediaImageResolver {
  constructor(private readonly mediaImageService: MediaImageService) {}

  @Mutation(() => MediaImage)
  createMediaImage(@Args('createMediaImageInput') createMediaImageInput: CreateMediaImageInput) {
    return this.mediaImageService.create(createMediaImageInput);
  }

  @Query(() => [MediaImage], { name: 'mediaImage' })
  findAll() {
    return this.mediaImageService.findAll();
  }

  @Query(() => MediaImage, { name: 'mediaImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaImageService.findOne(id);
  }

  @Mutation(() => MediaImage)
  updateMediaImage(@Args('updateMediaImageInput') updateMediaImageInput: UpdateMediaImageInput) {
    return this.mediaImageService.update(updateMediaImageInput.id, updateMediaImageInput);
  }

  @Mutation(() => MediaImage)
  removeMediaImage(@Args('id', { type: () => Int }) id: number) {
    return this.mediaImageService.remove(id);
  }
}
