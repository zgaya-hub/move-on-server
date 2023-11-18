import { Injectable } from '@nestjs/common';
import { MediaResourceInputDto } from './dto/media-resource.input.dto';
import { MediaResource } from './entities/media-resource.entity';
import { RadisService } from '../radis/radis.service';
import { MovierMediaType } from '../common/types/Common.type';
import { Movie } from '../movie/entities/movie.entity';
import { Episode } from '../episode/entities/episode.entity';
import { Trailer } from '../trailer/entities/trailer.entity';
import { AwsS3Service } from '../aws/aws-s3/aws-s3.service';
import { Transactional } from 'typeorm-transactional';
import { EntitySaveService } from '../adapter/save.service';
// import { EntitySaveService } from '../utilities/class/EntitySaveService.util';

@Injectable()
export class MediaResourceService {
  constructor(private readonly radisService: RadisService, private readonly awsS3Service: AwsS3Service) {}

  @Transactional()
  async createMediaResource(input: MediaResourceInputDto.CreateMediaInput, media: MovierMediaType, entitySaveService?: EntitySaveService): Promise<MediaResource> {
    try {
      const mediaResource = new MediaResource();

      const s3ObjectKey = await this.retrieveS3ObjectKey(input.SignedUrlKeyId);

      mediaResource.mediaS3ObjectKey = s3ObjectKey;
      if (media instanceof Movie) mediaResource.movie = media;
      if (media instanceof Episode) mediaResource.episode = media;
      if (media instanceof Trailer) mediaResource.trailer = media;

      if (entitySaveService) {
        entitySaveService.push(mediaResource);
      } else {
        await mediaResource.save();
      }

      return mediaResource;
    } catch (error) {
      throw new Error(error);
    }
  }

  async retrieveS3ObjectKey(keyId: string): Promise<string> {
    try {
      const storedKey = await this.radisService.retrieveStringValueFromTempStorage({ service: 'awsS3', key: keyId });
      const objectKey = await this.awsS3Service.getMediaObjectKey(storedKey.value);
      return objectKey;
    } catch (error) {
      throw new Error(error);
    }
  }
}
