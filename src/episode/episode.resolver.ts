import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EpisodeService } from './episode.service';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeInput } from './dto/create-episode.input';
import { UpdateEpisodeInput } from './dto/update-episode.input';

@Resolver(() => Episode)
export class EpisodeResolver {
  constructor(private readonly episodeService: EpisodeService) {}

  @Mutation(() => Episode)
  createEpisode(@Args('createEpisodeInput') createEpisodeInput: CreateEpisodeInput) {
    return this.episodeService.create(createEpisodeInput);
  }

  @Query(() => [Episode], { name: 'episode' })
  findAll() {
    return this.episodeService.findAll();
  }

  @Query(() => Episode, { name: 'episode' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.episodeService.findOne(id);
  }

  @Mutation(() => Episode)
  updateEpisode(@Args('updateEpisodeInput') updateEpisodeInput: UpdateEpisodeInput) {
    return this.episodeService.update(updateEpisodeInput.id, updateEpisodeInput);
  }

  @Mutation(() => Episode)
  removeEpisode(@Args('id', { type: () => Int }) id: number) {
    return this.episodeService.remove(id);
  }
}
