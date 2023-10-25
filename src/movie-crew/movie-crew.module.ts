import { Module } from '@nestjs/common';
import { MovieCrewService } from './movie-crew.service';
import { MovieCrewResolver } from './movie-crew.resolver';

@Module({
  providers: [MovieCrewResolver, MovieCrewService],
})
export class MovieCrewModule {}
