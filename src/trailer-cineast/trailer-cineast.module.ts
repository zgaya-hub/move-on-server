import { Module } from '@nestjs/common';
import { TrailerCineastService } from './trailer-cineast.service';
import { TrailerCineastResolver } from './trailer-cineast.resolver';

@Module({
  providers: [TrailerCineastResolver, TrailerCineastService]
})
export class TrailerCineastModule {}
