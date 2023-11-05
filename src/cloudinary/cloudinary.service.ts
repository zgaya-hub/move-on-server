import { Injectable } from '@nestjs/common';
import { CloudinaryOutputDto } from './dto/cloudinary.output.dto';
import { UploadApiOptions, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import { v4 as uuid } from 'uuid';
import { Readable, Transform } from 'stream';
import { CloudinaryInputDto } from './dto/cloudinary.input.dto';
import { ConfigService } from '@nestjs/config';
import { SingleBar } from 'cli-progress';
import { handleOnBase64ToBuffer } from '../utils/base64ToBuffer';

@Injectable()
export class CloudinaryService {
  private readonly progressBar: SingleBar;

  constructor(private configService: ConfigService) {
    this.progressBar = new SingleBar({});

    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  private async uploadToCloudinary(options: UploadApiOptions, imageBuffer: Buffer): Promise<UploadApiResponse> {
    return new Promise<UploadApiResponse>((resolve, reject) => {
      this.progressBar.start(100, 0);

      const uploadStream = cloudinary.uploader.upload_stream(options, (err, res) => {
        if (err) {
          reject(err);
        } else {
          this.progressBar.stop();
          resolve(res);
        }
      });

      const progressTransform = new Transform({
        transform(chunk, _, callback) {
          this.emit('progress', chunk.length);
          callback(null, chunk);
        },
      });

      progressTransform.on('progress', (progress) => {
        this.showProgress(imageBuffer.length, progress);
      });

      const imageStream = this.createImageStream(imageBuffer);
      imageStream.pipe(progressTransform).pipe(uploadStream);
    });
  }

  async uploadImageOnCloudinary(input: CloudinaryInputDto.CloudinaryUploadInput): Promise<CloudinaryOutputDto.ImageUrlOutput> {
    try {
      const imageBuffer = handleOnBase64ToBuffer(input.base64);
      const uniqueImageId = uuid();

      const options: UploadApiOptions = {
        public_id: uniqueImageId,
        resource_type: 'image',
      };

      const res = await this.uploadToCloudinary(options, imageBuffer);

      return { imageUrl: res.url };
    } catch (error) {
      throw new Error(error);
    }
  }

  createImageStream(imageBuffer: Buffer) {
    const imageStream = new Readable({
      highWaterMark: 64,
    });
    imageStream.push(imageBuffer);
    imageStream.push(null);
    return imageStream;
  }

  showProgress(totalBytes: number, bytesRead: number) {
    const progress = Math.floor((bytesRead / totalBytes) * 100);
    this.progressBar.update(progress);
  }
}
