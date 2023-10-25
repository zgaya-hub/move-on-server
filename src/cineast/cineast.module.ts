import { Module } from '@nestjs/common';
import { CineastService } from './cineast.service';
import { CineastResolver } from './cineast.resolver';

@Module({
  providers: [CineastResolver, CineastService],
})
export class CineastModule {}
