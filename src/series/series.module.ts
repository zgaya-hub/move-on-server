import { Module } from '@nestjs/common';
import { SeriesResolver } from './series.resolver';
import { SeriesService } from './series.service';
import { SeriesRepository } from './series.repository';
import { ManagerModule } from '../manager/manager.module';
import { MediaImageModule } from '../media-image/media-image.module';
import { MediaBasicInfoModule } from '../media-basic-info/media-basic-info.module';
import { MediaAdditionalInfoModule } from '../media-additional-info/media-additional-info.module';

@Module({
  imports: [ManagerModule, MediaImageModule, MediaBasicInfoModule, MediaAdditionalInfoModule],
  providers: [SeriesResolver, SeriesService, SeriesRepository],
  exports: [SeriesService],
})
export class SeriesModule {}
