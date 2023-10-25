import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl as awsGetSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsS3Service {
  private s3Client: S3Client;
  constructor(private readonly configService: ConfigService) {
    this.s3Client = new S3Client({
      region: this.configService.get<string>('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('S3_ACCESS_KEY'),
        secretAccessKey: this.configService.get<string>('S3_SECRET_ACCESS_KEY'),
      },
    });
  }

  async generateMovieUploadUrl(fileName: string, mine: VideoMineType, currentUser?: CurrentUserType) {
    const command = new PutObjectCommand({
      Bucket: this.configService.get<string>('S3_VIDEO_BACKET'),
      Key: `${currentUser.ID}/${fileName}.${Date.now()}`,
      ContentType: mine,
    });

    return this.getSignedUrl(command);
  }

  async generateShortUploadUrl(fileName: string, mine: VideoMineType, currentUser?: CurrentUserType) {
    const command = new PutObjectCommand({
      Bucket: this.configService.get<string>('S3_SHORT_BACKET'),
      Key: `${currentUser.ID}/${fileName}.${Date.now()}`,
      ContentType: mine,
    });

    return this.getSignedUrl(command);
  }

  private async getSignedUrl(command: PutObjectCommand) {
    return awsGetSignedUrl(this.s3Client, command);
  }
}
