import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaAdditionalInfoService } from './media-additional-info.service';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { CreateMediaAdditionalInfoInput } from './dto/create-media-additional-info.input';
import { UpdateMediaAdditionalInfoInput } from './dto/update-media-additional-info.input';

@Resolver(() => MediaAdditionalInfo)
export class MediaAdditionalInfoResolver {
  constructor(private readonly mediaAdditionalInfoService: MediaAdditionalInfoService) {}

  @Mutation(() => MediaAdditionalInfo)
  createMediaAdditionalInfo(@Args('createMediaAdditionalInfoInput') createMediaAdditionalInfoInput: CreateMediaAdditionalInfoInput) {
    return this.mediaAdditionalInfoService.create(createMediaAdditionalInfoInput);
  }

  @Query(() => [MediaAdditionalInfo], { name: 'mediaAdditionalInfo' })
  findAll() {
    return this.mediaAdditionalInfoService.findAll();
  }

  @Query(() => MediaAdditionalInfo, { name: 'mediaAdditionalInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaAdditionalInfoService.findOne(id);
  }

  @Mutation(() => MediaAdditionalInfo)
  updateMediaAdditionalInfo(@Args('updateMediaAdditionalInfoInput') updateMediaAdditionalInfoInput: UpdateMediaAdditionalInfoInput) {
    return this.mediaAdditionalInfoService.update(updateMediaAdditionalInfoInput.id, updateMediaAdditionalInfoInput);
  }

  @Mutation(() => MediaAdditionalInfo)
  removeMediaAdditionalInfo(@Args('id', { type: () => Int }) id: number) {
    return this.mediaAdditionalInfoService.remove(id);
  }
}
