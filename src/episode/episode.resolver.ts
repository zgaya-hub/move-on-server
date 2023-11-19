import { Resolver } from '@nestjs/graphql';
import { EpisodeService } from './episode.service';
import { Episode } from './entities/episode.entity';

@Resolver(() => Episode)
export class EpisodeResolver {
  constructor(private readonly episodeService: EpisodeService) {}
}
