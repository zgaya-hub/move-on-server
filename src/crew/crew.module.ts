import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewResolver } from './crew.resolver';

@Module({
  providers: [CrewResolver, CrewService],
})
export class CrewModule {}
