import { Module } from '@nestjs/common';
import { TrailerService } from './trailer.service';
import { TrailerResolver } from './trailer.resolver';

@Module({
  providers: [TrailerResolver, TrailerService],
})
export class TrailerModule {}
