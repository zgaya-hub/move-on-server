import { Module } from '@nestjs/common';
import { MediaBasicInfoService } from './media-basic-info.service';
import { MediaBasicInfoResolver } from './media-basic-info.resolver';
import { MediaBasicInfoRepository } from './media-basic-info.repository';

@Module({
  providers: [MediaBasicInfoResolver, MediaBasicInfoService, MediaBasicInfoRepository],
  exports: [MediaBasicInfoService],
})
export class MediaBasicInfoModule {}
