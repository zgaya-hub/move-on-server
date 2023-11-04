/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CloudinaryOutputDto } from './dto/cloudinary.output.dto';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { v4 as uuid } from 'uuid';
import { Readable, Transform } from 'stream';
import { CloudinaryInputDto } from './dto/cloudinary.input.dto';
import { ConfigService } from '@nestjs/config';
import { SingleBar, Presets } from 'cli-progress';
import { handleOnBase64ToBuffer } from '../utils/base64ToBuffer';

@Injectable()
export class CloudinaryService {
  private readonly progressBar: any;

  constructor(private configService: ConfigService) {
    this.progressBar = new SingleBar({});
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImageOnCloudinary(input: CloudinaryInputDto.CloudinaryUploadInput): Promise<CloudinaryOutputDto.CloudinaryUploadOutput> {
    try {
      const uniqueImageId = uuid(); // Set a meaningful unique ID
      this.progressBar.start(100, 0);

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          public_id: uniqueImageId,
          resource_type: 'image',
        },
        (err, res) => {
          if (err) throw new Error(err.message);
          console.log(res);
        },
      );

      const imageBuffer = handleOnBase64ToBuffer(input.base64);
      const imageStream = this.createImageStream(imageBuffer);

      const progressTransform = new Transform({
        transform(chunk, _, __) {
          this.emit('progress', chunk.length);
        },
      });

      imageStream.pipe(progressTransform).pipe(uploadStream);

      return new Promise<CloudinaryOutputDto.CloudinaryUploadOutput>((resolve, reject) => {
        uploadStream.on('end', (e) => {
          this.progressBar.stop();
          console.log('Upload stream ended');
          resolve({ mediaImageUrl: e });
        });

        uploadStream.on('error', (error) => {
          reject(error);
        });

        progressTransform.on('progress', (progress) => {
          this.showProgress(imageBuffer.length, progress);
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  createImageStream(imageBuffer: Buffer) {
    const imageStream = new Readable();
    imageStream.push(imageBuffer);
    imageStream.push(null);
    return imageStream;
  }

  showProgress(totalBytes: number, bytesRead: number) {
    const progress = Math.floor((bytesRead / totalBytes) * 100);
    this.progressBar.update(progress);
  }
}
