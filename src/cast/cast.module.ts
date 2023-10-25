import { Module } from '@nestjs/common';
import { CastService } from './cast.service';
import { CastResolver } from './cast.resolver';

@Module({
  providers: [CastResolver, CastService],
})
export class CastModule {}
