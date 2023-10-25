import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { VideoInputDto } from './dto/video.input.dto';
import { ShortDetectoPipe } from './short-detector/short-detector.pipe';
import { UsePipes } from '@nestjs/common';
import { VideoValidatorPipe } from './video-validator/video-validator.pipe';
import { VideoOutputDto } from './dto/video.output.dto';
import { VideoService } from './video.service';

@Resolver()
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => VideoOutputDto.GetS3UploadVdeoUrlOutput)
  @UsePipes(ShortDetectoPipe)
  @UsePipes(VideoValidatorPipe)
  async getS3UploadVideoUrl(
    @Args('GetS3UploadVdeoUrlInput')
    input: VideoInputDto.GetS3UploadVdeoUrlInput,
  ): Promise<VideoOutputDto.GetS3UploadVdeoUrlOutput> {
    return this.videoService.getS3UploadVideoUrl(input);
  }
}
