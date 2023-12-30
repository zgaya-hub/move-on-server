import { Injectable } from '@nestjs/common';
import { CloudinaryOutputDto } from './dto/cloudinary.output.dto';
import { UploadApiOptions, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import { v4 as uuid } from 'uuid';
import { Transform, PassThrough } from 'stream';
import { CloudinaryInputDto } from './dto/cloudinary.input.dto';
import { ConfigService } from '@nestjs/config';
import { SingleBar } from 'cli-progress';
import { handleOnBase64ToBuffer } from '../utilities/function/base64ToBuffer';

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

  private writeChunksToStream(imageBuffer: Buffer, chunkSize: number, imageStream: PassThrough) {
    for (let i = 0; i < imageBuffer.length; i += chunkSize) {
      const chunk = imageBuffer.slice(i, i + chunkSize);
      imageStream.write(chunk);
    }
    imageStream.end();
  }

  private async uploadToCloudinary(options: UploadApiOptions, imageBuffer: Buffer, chunkSize: number): Promise<UploadApiResponse> {
    return new Promise<UploadApiResponse>((resolve, reject) => {
      const totalBytes = imageBuffer.length;
      let bytesRead = 0;

      this.progressBar.start(100, 0);

      const progressTransform = new Transform({
        transform(chunk, _, callback) {
          bytesRead += chunk.length;
          this.emit('progress', bytesRead);
          callback(null, chunk);
        },
      });

      progressTransform.on('progress', (progress) => {
        this.showProgress(totalBytes, progress);
      });

      const uploadStream = cloudinary.uploader.upload_stream(options, (err, res) => {
        if (err) {
          reject(err);
        } else {
          this.progressBar.stop();
          resolve(res);
        }
      });

      const imageStream = new PassThrough({ highWaterMark: chunkSize });

      this.writeChunksToStream(imageBuffer, chunkSize, imageStream);

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

      const res = await this.uploadToCloudinary(options, imageBuffer, 64);

      return { imageUrl: res.url };
    } catch (error) {
      throw new Error(error);
    }
  }

  showProgress(totalBytes: number, bytesRead: number) {
    const progress = Math.floor((bytesRead / totalBytes) * 100);
    this.progressBar.update(progress);
  }
}
