import { Injectable } from '@nestjs/common';
import { CloudinaryOutputDto } from './dto/cloudinary.output.dto';
import { v2, UploadApiResponse } from 'cloudinary';
import { Readable, Transform } from 'stream';
import { CloudinaryInputDto } from './dto/cloudinary.input.dto';
import { ConfigService } from '@nestjs/config';
import { SingleBar, Presets } from 'cli-progress';
import { handleOnBase64ToBuffer } from '../utils/base64ToBuffer';

@Injectable()
export class CloudinaryService {
  private readonly progressBar: any;

  constructor(private configService: ConfigService) {
    this.progressBar = new SingleBar({}, Presets.shades_classic);
    v2.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImageOnCloudinary(input: CloudinaryInputDto.CloudinaryUploadInput): Promise<CloudinaryOutputDto.CloudinaryUploadOutput> {
    const uniqueImageId = ' ';
    this.progressBar.start(100, 0);

    const uploadStream = v2.uploader.upload_stream({
      public_id: uniqueImageId,
      resource_type: 'image',
    });

    const imageBuffer = handleOnBase64ToBuffer(input.base64);
    const imageStream = this.createImageStream(imageBuffer);

    const progressTransform = new Transform({
      transform(chunk, _, __) {
        this.emit('progress', chunk.length);
      },
    });

    imageStream.pipe(progressTransform).pipe(uploadStream);

    return new Promise<CloudinaryOutputDto.CloudinaryUploadOutput>((resolve, reject) => {
      uploadStream.on('end', () => {
        this.progressBar.stop();
        resolve({ mediaImageUrl: `uploadStream.result.url` });
      });

      uploadStream.on('error', (error) => {
        reject(error);
      });

      progressTransform.on('progress', () => {
        this.showProgress(imageBuffer, imageStream);
      });
    });
  }

  createImageStream(imageBuffer: Buffer) {
    const imageStream = new Readable();
    imageStream.push(imageBuffer);
    imageStream.push(null);
    return imageStream;
  }

  showProgress(imageBuffer: Buffer, imageStream: Readable) {
    const progress = (imageStream.readableLength / imageBuffer.length) * 100;
    this.progressBar.update(progress);
  }
}
