import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaInfoService } from './media-info.service';
import { MediaInfo } from './entities/media-info.entity';
import { CreateMediaInfoInput } from './dto/create-media-info.input';
import { UpdateMediaInfoInput } from './dto/update-media-info.input';

@Resolver(() => MediaInfo)
export class MediaInfoResolver {
  constructor(private readonly mediaInfoService: MediaInfoService) {}

  @Mutation(() => MediaInfo)
  createMediaInfo(@Args('createMediaInfoInput') createMediaInfoInput: CreateMediaInfoInput) {
    return this.mediaInfoService.create(createMediaInfoInput);
  }

  @Query(() => [MediaInfo], { name: 'mediaInfo' })
  findAll() {
    return this.mediaInfoService.findAll();
  }

  @Query(() => MediaInfo, { name: 'mediaInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaInfoService.findOne(id);
  }

  @Mutation(() => MediaInfo)
  updateMediaInfo(@Args('updateMediaInfoInput') updateMediaInfoInput: UpdateMediaInfoInput) {
    return this.mediaInfoService.update(updateMediaInfoInput.id, updateMediaInfoInput);
  }

  @Mutation(() => MediaInfo)
  removeMediaInfo(@Args('id', { type: () => Int }) id: number) {
    return this.mediaInfoService.remove(id);
  }
}
