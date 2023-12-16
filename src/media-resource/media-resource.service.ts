import { Injectable } from '@nestjs/common';
import { MediaResourceInputDto } from './dto/media-resource.input.dto';
import { MediaResource } from './entities/media-resource.entity';
import { RadisService } from '../radis/radis.service';
import { MovierMediaType } from '../common/types/Common.type';
import { Movie } from '../movie/entities/movie.entity';
import { Episode } from '../episode/entities/episode.entity';
import { Trailer } from '../trailer/entities/trailer.entity';
import { AwsS3Service } from '../aws/aws-s3/aws-s3.service';
import { EntitySaveService } from '../adapter/save.service';
import { MediaResourceOutputDto } from './dto/media-resource.output.dto';

@Injectable()
export class MediaResourceService {
  constructor(private readonly radisService: RadisService, private readonly awsS3Service: AwsS3Service, private readonly entitySaveService: EntitySaveService) {}

  async createMediaResource(input: MediaResourceInputDto.CreateMediaInput, media: MovierMediaType, entitySaveService?: EntitySaveService): Promise<MediaResource> {
    try {
      const mediaResource = new MediaResource();

      const objectKeyAndUrl = await this.retrieveObjectKeyAndUrl(input.SignedUrlKeyId);

      mediaResource.mediaS3ObjectKey = objectKeyAndUrl.ObjectKey;
      mediaResource.mediaS3ObjectKey = objectKeyAndUrl.ObjectUrl;
      if (media instanceof Movie) mediaResource.movie = media;
      if (media instanceof Episode) mediaResource.episode = media;
      if (media instanceof Trailer) mediaResource.trailer = media;

      if (entitySaveService) {
        entitySaveService.push(mediaResource);
      } else {
        await this.entitySaveService.save<MediaResource>(mediaResource);
      }

      return mediaResource;
    } catch (error) {
      throw new Error(error);
    }
  }

  async retrieveObjectKeyAndUrl(keyId: string): Promise<MediaResourceOutputDto.RetrieveS3ObjectKeyAndUrlOutput> {
    try {
      const storedKey = await this.radisService.retrieveStringValueFromTempStorage({ service: 'awsS3', key: keyId });
      const objectKey = await this.awsS3Service.getMediaObjectKey(storedKey.Value);
      return { ObjectKey: storedKey.Value, ObjectUrl: objectKey };
    } catch (error) {
      throw new Error(error);
    }
  }
}
