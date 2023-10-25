import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeResolver } from './episode.resolver';

@Module({
  providers: [EpisodeResolver, EpisodeService],
})
export class EpisodeModule {}
