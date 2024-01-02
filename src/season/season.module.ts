import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonResolver } from './season.resolver';
import { SeasonRepository } from './season.repository';
import { SeriesModule } from '../series/series.module';
import { MediaBasicInfoModule } from '../media-basic-info/media-basic-info.module';
import { ImageModule } from '../image/image.module';
import { MockModule } from 'src/mock/mock.module';

@Module({
  imports: [SeriesModule, MockModule, MediaBasicInfoModule, ImageModule],
  providers: [SeasonResolver, SeasonService, SeasonRepository],
  exports: [SeasonService],
})
export class SeasonModule {}
