import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaInformationService } from './media-information.service';
import { MediaInformation } from './entities/media-information.entity';
import { CreateMediaInformationInput } from './dto/create-media-information.input';
import { UpdateMediaInformationInput } from './dto/update-media-information.input';

@Resolver(() => MediaInformation)
export class MediaInformationResolver {
  constructor(private readonly mediaInformationService: MediaInformationService) {}

  @Mutation(() => MediaInformation)
  createMediaInformation(@Args('createMediaInformationInput') createMediaInformationInput: CreateMediaInformationInput) {
    return this.mediaInformationService.create(createMediaInformationInput);
  }

  @Query(() => [MediaInformation], { name: 'mediaInformation' })
  findAll() {
    return this.mediaInformationService.findAll();
  }

  @Query(() => MediaInformation, { name: 'mediaInformation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaInformationService.findOne(id);
  }

  @Mutation(() => MediaInformation)
  updateMediaInformation(@Args('updateMediaInformationInput') updateMediaInformationInput: UpdateMediaInformationInput) {
    return this.mediaInformationService.update(updateMediaInformationInput.id, updateMediaInformationInput);
  }

  @Mutation(() => MediaInformation)
  removeMediaInformation(@Args('id', { type: () => Int }) id: number) {
    return this.mediaInformationService.remove(id);
  }
}
