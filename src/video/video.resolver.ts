import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { VideoInputDto } from './dto/video.input.dto';
import { ShortDetectorPipe } from './short-detector/short-detector.pipe';
import { UseGuards, UsePipes } from '@nestjs/common';
import { VideoValidatorPipe } from './video-validator/video-validator.pipe';
import { VideoOutputDto } from './dto/video.output.dto';
import { VideoService } from './video.service';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { CurrentUser } from '../decorator/current-user/current-user.decorator';

@Resolver()
@UseGuards(JwtManagerAuthGuard)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => VideoOutputDto.GetS3UploadVdeoUrlOutput)
  async getS3UploadVideoUrl(
    @Args('GetS3UploadVdeoUrlInput', ShortDetectorPipe, VideoValidatorPipe)
    input: VideoInputDto.GetS3UploadVdeoUrlInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<VideoOutputDto.GetS3UploadVdeoUrlOutput> {
    try {
      return this.videoService.getS3UploadVideoUrl(input, manager);
    } catch (error) {
      return error;
    }
  }
}
