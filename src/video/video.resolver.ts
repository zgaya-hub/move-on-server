import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { VideoInputDto } from './dto/video.input.dto';
import { ShortDetectorPipe } from './short-detector/short-detector.pipe';
import { UseGuards } from '@nestjs/common';
import { VideoValidatorPipe } from './video-validator/video-validator.pipe';
import { VideoOutputDto } from './dto/video.output.dto';
import { VideoService } from './video.service';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { CurrentUser } from '../decorator/current-user/current-user.decorator';

@Resolver()
@UseGuards(JwtManagerAuthGuard)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => VideoOutputDto.UploadVideoSignedUrlOutput)
  async getUploadVideoSignedUrl(
    @Args('GetUploadVideoSignedUrlInput', ShortDetectorPipe, VideoValidatorPipe)
    input: VideoInputDto.GetUploadVideoSignedUrlInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<VideoOutputDto.UploadVideoSignedUrlOutput> {
    try {
      return this.videoService.getUploadVideoSignedUrl(input, manager);
    } catch (error) {
      throw new Error(error);
    }
  }
}
