import { Injectable } from '@nestjs/common';
import { AwsS3Service } from '../aws/aws-s3/aws-s3.service';
import { VideoInputDto } from './dto/video.input.dto';
import { VideoOutputDto } from './dto/video.output.dto';

@Injectable()
export class VideoService {
  constructor(private readonly awsS3Service: AwsS3Service) {}

  async getS3UploadVideoUrl(
    input: VideoInputDto.GetS3UploadVdeoUrlInput,
    currentUser?: CurrentUserType,
  ): Promise<VideoOutputDto.GetS3UploadVdeoUrlOutput> {
    const uploadUrlGenerator = {
      short: this.awsS3Service.generateShortUploadUrl,
      false: this.awsS3Service.generateMovieUploadUrl,
    };

    const signedUrl = await uploadUrlGenerator[JSON.stringify(input.isShort)](input.mime, input.mime, currentUser);

    return { url: signedUrl };
  }
}
