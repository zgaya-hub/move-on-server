import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaBasicInfoService } from './media-basic-info.service';
import { MediaBasicInfo } from './entities/media-basic-info.entity';
import { CreateMediaBasicInfoInput } from './dto/create-media-basic-info.input';
import { UpdateMediaBasicInfoInput } from './dto/update-media-basic-info.input';

@Resolver(() => MediaBasicInfo)
export class MediaBasicInfoResolver {
  constructor(private readonly mediaBasicInfoService: MediaBasicInfoService) {}

  @Mutation(() => MediaBasicInfo)
  createMediaBasicInfo(@Args('createMediaBasicInfoInput') createMediaBasicInfoInput: CreateMediaBasicInfoInput) {
    return this.mediaBasicInfoService.create(createMediaBasicInfoInput);
  }

  @Query(() => [MediaBasicInfo], { name: 'mediaBasicInfo' })
  findAll() {
    return this.mediaBasicInfoService.findAll();
  }

  @Query(() => MediaBasicInfo, { name: 'mediaBasicInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaBasicInfoService.findOne(id);
  }

  @Mutation(() => MediaBasicInfo)
  updateMediaBasicInfo(@Args('updateMediaBasicInfoInput') updateMediaBasicInfoInput: UpdateMediaBasicInfoInput) {
    return this.mediaBasicInfoService.update(updateMediaBasicInfoInput.id, updateMediaBasicInfoInput);
  }

  @Mutation(() => MediaBasicInfo)
  removeMediaBasicInfo(@Args('id', { type: () => Int }) id: number) {
    return this.mediaBasicInfoService.remove(id);
  }
}
