import { Args, Query, Resolver } from '@nestjs/graphql';
import { MediaAdditionalInfoService } from './media-additional-info.service';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { MediaAdditionalInfoInputDto } from './dto/media-additional-info.input.dto';

@Resolver(() => MediaAdditionalInfo)
export class MediaAdditionalInfoResolver {
  constructor(private readonly mediaAdditionalInfoService: MediaAdditionalInfoService) {}

  @Query(() => MediaAdditionalInfo)
  async getMediaAdditionalInfoByMediaId(
    @Args('GetMediaAdditionalInfoByMediaIdParams')
    params: MediaAdditionalInfoInputDto.GetMediaAdditionalInfoByMediaIdParams,
  ): Promise<MediaAdditionalInfo> {
    try {
      return this.mediaAdditionalInfoService.getMediaAdditionalInfoByMediaId(params.MediaId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
