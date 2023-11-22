import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Movie } from './entities/movie.entity';
import { MovieInputDto } from './dto/movie.input.dto';
import { Transactional } from 'typeorm-transactional';
import { ManagerService } from '../manager/manager.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaAdditionalInfo } from '../media-additional-info/entities/media-additional-info.entity';
import { MediaAdditionalInfoService } from '../media-additional-info/media-additional-info.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaResourceService } from '../media-resource/media-resource.service';
import { EntitySaveService } from '../adapter/save.service';
import { MediaImageService } from '../media-image/media-image.service';
import { FinancialInfoService } from '../financial-info/financial-info.service';
import { FinancialInfo } from '../financial-info/entities/financial-info.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(
    private readonly videoService: VideoService,
    private readonly mediaAdditionalInfoService: MediaAdditionalInfoService,
    private readonly mediaBasicInfoService: MediaBasicInfoService,
    private readonly managerService: ManagerService,
    private readonly mediaResourceService: MediaResourceService,
    private readonly entitySaveService: EntitySaveService,
    private readonly mediaImageService: MediaImageService,
    private readonly financialInfoService: FinancialInfoService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async createMovie(input: MovieInputDto.CreateMovieInput, currentManager: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const movie = new Movie();

      let mediaAdditionalInfo: MediaAdditionalInfo;
      let financialInfo: FinancialInfo;

      const manager = await this.managerService.findByEmail(currentManager.email);
      const video = await this.videoService.assignVideoToMedia(input.VideoId, movie, this.entitySaveService);
      const mediaImage = await this.mediaImageService.assignMediaImageToMedia(input.MediaImageId, movie, this.entitySaveService);

      const mediaResource = await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, movie, this.entitySaveService);
      const mediaBasicInfo = await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, movie, this.entitySaveService);

      if (input.MediaAdditionalInfo) {
        mediaAdditionalInfo = await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, movie, this.entitySaveService);
      }

      if (input.MediaFinanacialInfo) {
        financialInfo = await this.financialInfoService.createFinancialInfo(input.MediaFinanacialInfo, movie, this.entitySaveService);
      }

      movie.video = video;
      movie.manager = manager;
      movie.mediaResource = mediaResource;
      movie.mediaBasicInfo = mediaBasicInfo;
      movie.mediaImage = [mediaImage];
      if (mediaAdditionalInfo) movie.mediaAdditionalInfo = mediaAdditionalInfo;
      if (financialInfo) movie.financialInfo = financialInfo;

      this.entitySaveService.push(movie);
      await this.entitySaveService.save();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMovieById(id: string): Promise<Movie> {
    try {
      const movie = await this.movieRepository.findMovieById(id);
      if (!movie) {
        throw new NotFoundException('Invalid Movie specified');
      }

      return movie;
    } catch (error) {
      throw new Error(error);
    }
  }
}
