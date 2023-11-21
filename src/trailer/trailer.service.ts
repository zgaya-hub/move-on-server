import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Trailer } from './entities/trailer.entity';
import { TrailerInputDto } from './dto/trailer.input.dto';
import { Transactional } from 'typeorm-transactional';
import { ManagerService } from '../manager/manager.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaResourceService } from '../media-resource/media-resource.service';
import { EntitySaveService } from '../adapter/save.service';
import { MediaImageService } from '../media-image/media-image.service';
import { TrailerMediaEnum } from './enum/trailer.enum';
import { MovieService } from '@/movie/movie.service';
import { SeriesService } from '@/series/series.service';
import { SeasonService } from '@/season/season.service';
import { MovierMediaType } from '@/common/types/Common.type';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { Season } from '@/season/entities/season.entity';
import { TrailerRepository } from './trailer.repository';

@Injectable()
export class TrailerService {
  constructor(
    private readonly videoService: VideoService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly managerService: ManagerService,
    private readonly mediaResourceService: MediaResourceService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mediaImageService: MediaImageService,
    private readonly movieService: MovieService,
    private readonly seriesService: SeriesService,
    private readonly seasonService: SeasonService,
    private readonly trailerRepository: TrailerRepository,
  ) { }

  @Transactional()
  async createTrailer(input: TrailerInputDto.CreateTrailerInput, currentManager: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const trailer = new Trailer();
      let media: MovierMediaType

      const manager = await this.managerService.findByEmail(currentManager.email);
      const video = await this.videoService.assignVideoToMedia(input.VideoId, trailer, this.entitySaveService);
      const mediaImage = await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, trailer, this.entitySaveService);

      const mediaResource = await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, trailer, this.entitySaveService);
      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, trailer, this.entitySaveService);

      if (input.MediaId) {
        media = await this.findMediaByIdAndType(input.MediaId, input.MediaType)
      }

      trailer.video = video;
      trailer.manager = manager;
      trailer.mediaResource = mediaResource;
      trailer.mediaBasicInfo = mediaBasicInfo;
      trailer.mediaImage = [mediaImage];

      if (media instanceof Movie) trailer.movie = media
      if (media instanceof Series) trailer.series = media
      if (media instanceof Season) trailer.season = media

      this.entitySaveService.push(trailer);
      await this.entitySaveService.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }


  private async findMediaByIdAndType(mediaId: string, type: TrailerMediaEnum) {
    try {
      let media: MovierMediaType;

      if (type === TrailerMediaEnum.MOVIE) {
        media = await this.movieService.findMovieById(mediaId)
      }

      if (type === TrailerMediaEnum.SEASON) {
        media = await this.seasonService.findSeasonById(mediaId)
      }

      if (type === TrailerMediaEnum.SERIES) {
        media = await this.seriesService.findSeriesById(mediaId)
      }

      return media
    } catch (error) {
      throw new Error(error);
    }
  }

  async findTrailerById(id: string): Promise<Trailer> {
    try {
      const trailer = await this.trailerRepository.findTrailerById(id)
      if (!trailer) {
        throw new NotFoundException('Invalid Trailer specified')
      }

      return trailer
    } catch (error) {
      throw new Error(error);
    }
  }
}
