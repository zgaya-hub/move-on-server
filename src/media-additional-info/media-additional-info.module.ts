import { Module } from '@nestjs/common';
import { MediaAdditionalInfoService } from './media-additional-info.service';
import { MediaAdditionalInfoResolver } from './media-additional-info.resolver';
import { MediaAdditionalInfoRepository } from './media-additional-info.repository';

@Module({
  providers: [MediaAdditionalInfoResolver, MediaAdditionalInfoService, MediaAdditionalInfoRepository],
  exports: [MediaAdditionalInfoService],
})
export class MediaAdditionalInfoModule {}
