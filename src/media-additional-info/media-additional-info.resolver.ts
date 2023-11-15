import { Resolver } from '@nestjs/graphql';
import { MediaAdditionalInfoService } from './media-additional-info.service';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';

@Resolver(() => MediaAdditionalInfo)
export class MediaAdditionalInfoResolver {
  constructor(private readonly mediaAdditionalInfoService: MediaAdditionalInfoService) {}
}
