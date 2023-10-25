import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExternalLinkService } from './external-link.service';
import { ExternalLink } from './entities/external-link.entity';
import { CreateExternalLinkInput } from './dto/create-external-link.input';
import { UpdateExternalLinkInput } from './dto/update-external-link.input';

@Resolver(() => ExternalLink)
export class ExternalLinkResolver {
  constructor(private readonly externalLinkService: ExternalLinkService) {}

  @Mutation(() => ExternalLink)
  createExternalLink(@Args('createExternalLinkInput') createExternalLinkInput: CreateExternalLinkInput) {
    return this.externalLinkService.create(createExternalLinkInput);
  }

  @Query(() => [ExternalLink], { name: 'externalLink' })
  findAll() {
    return this.externalLinkService.findAll();
  }

  @Query(() => ExternalLink, { name: 'externalLink' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.externalLinkService.findOne(id);
  }

  @Mutation(() => ExternalLink)
  updateExternalLink(@Args('updateExternalLinkInput') updateExternalLinkInput: UpdateExternalLinkInput) {
    return this.externalLinkService.update(updateExternalLinkInput.id, updateExternalLinkInput);
  }

  @Mutation(() => ExternalLink)
  removeExternalLink(@Args('id', { type: () => Int }) id: number) {
    return this.externalLinkService.remove(id);
  }
}
