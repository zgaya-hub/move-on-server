import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MediaBasicInfoService } from './media-basic-info.service';
import { MediaBasicInfo } from './entities/media-basic-info.entity';
import { CommonOutputDto } from 'src/common/dto/common.dto';
import { MediaBasicInfoInputDto } from './dto/media-basic-info.input.dto';

@Resolver(() => MediaBasicInfo)
export class MediaBasicInfoResolver {
  constructor(private readonly mediaBasicInfoService: MediaBasicInfoService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async updateMediaBasicInfo(
    @Args('UpdateMediaBasicInfoInput')
    input: MediaBasicInfoInputDto.UpdateMediaBasicInfoInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.mediaBasicInfoService.updateMediaBasicInfo(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
