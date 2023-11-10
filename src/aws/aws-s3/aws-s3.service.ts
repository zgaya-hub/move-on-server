import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl as awsGetSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';
import { RadisService } from '@/radis/radis.service';
import { RadisInputDto } from '@/radis/dto/radis.input.dto';
import { AwsS3OutputDto } from './dto/aws-s3.output.dto';

@Injectable()
export class AwsS3Service {
  private s3Client: S3Client;
  private linkTtl: number;

  constructor(private readonly configService: ConfigService, private readonly radisService: RadisService) {
    this.linkTtl = this.configService.get<number>('VIDEO_LINK_TTL');

    this.s3Client = new S3Client({
      region: this.configService.get<string>('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('S3_ACCESS_KEY'),
        secretAccessKey: this.configService.get<string>('S3_SECRET_ACCESS_KEY'),
      },
    });
  }

  async generateMovieUploadUrl(mine: VideoMineType, currentManager: CurrentManagerType): Promise<AwsS3OutputDto.GetS3SignedUrlOutput> {
    try {
      const key = `${currentManager.ID}/movie/${Date.now()}`;

      const command = new PutObjectCommand({
        Bucket: this.configService.get<string>('S3_VIDEO_BACKET'),
        Key: key,
        ContentType: mine,
      });

      const signedUrl = await this.getSignedUrl(command);
      const signedUrlKeyId = await this.storeKeyInTempStorage(key);

      return { signedUrl, signedUrlKeyId };
    } catch (error) {
      throw new Error(error);
    }
  }

  async generateShortUploadUrl(mine: VideoMineType, currentManager: CurrentManagerType) {
    const key = `${currentManager.ID}/short/${Date.now()}`;

    const command = new PutObjectCommand({
      Bucket: this.configService.get<string>('S3_SHORT_BACKET'),
      Key: key,
      ContentType: mine,
    });

    return this.getSignedUrl(command);
  }

  async getSignedUrl(command: PutObjectCommand): Promise<string> {
    return awsGetSignedUrl(this.s3Client, command, { expiresIn: this.linkTtl });
  }

  async storeKeyInTempStorage(key: string): Promise<string> {
    try {
      const input: RadisInputDto.StoreDataInStorageInput<string> = {
        data: key,
        service: 'awsS3',
        ttl: this.linkTtl,
      };

      const storedKey = await this.radisService.storeDataInTempStorage<string>(input);
      return storedKey.ID;
    } catch (error) {}
  }
}
