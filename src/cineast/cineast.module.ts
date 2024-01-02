import { Module } from '@nestjs/common';
import { CineastService } from './cineast.service';
import { CineastResolver } from './cineast.resolver';
import { CineastRepository } from './cineast.repository';
import { ImageModule } from 'src/image/image.module';

@Module({
  imports: [ImageModule],
  providers: [CineastResolver, CineastService, CineastRepository],
  exports: [CineastService],
})
export class CineastModule {}
