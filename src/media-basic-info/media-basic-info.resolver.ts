import { Resolver } from '@nestjs/graphql';
import { MediaBasicInfoService } from './media-basic-info.service';
import { MediaBasicInfo } from './entities/media-basic-info.entity';

@Resolver(() => MediaBasicInfo)
export class MediaBasicInfoResolver {
  constructor(private readonly mediaBasicInfoService: MediaBasicInfoService) {}
}
