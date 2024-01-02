import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Movie } from './entities/movie.entity';
import { MovieInputDto } from './dto/movie.input.dto';
import { ManagerService } from '../manager/manager.service';
import { CommonOutputDto } from '../common/dto/common.dto';
import { MediaAdditionalInfoService } from '../media-additional-info/media-additional-info.service';
import { MediaBasicInfoService } from '../media-basic-info/media-basic-info.service';
import { MediaResourceService } from '../media-resource/media-resource.service';
import { EntitySaveService } from '../adapter/save.service';
import { ImageService } from '../image/image.service';
import { FinancialInfoService } from '../financial-info/financial-info.service';
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
    private readonly imageService: ImageService,
    private readonly financialInfoService: FinancialInfoService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async createMovie(input: MovieInputDto.CreateMovieInput, currentManager: CurrentManagerType): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const movie = new Movie();

      const manager = await this.managerService.findByEmail(currentManager.email);

      await this.videoService.assignVideoToMedia(input.VideoId, movie, this.entitySaveService);
      await this.imageService.assignImageToMedia(input.ImageId, movie, this.entitySaveService);
      await this.mediaResourceService.createMediaResource({ SignedUrlKeyId: input.SignedUrlKeyId }, movie, this.entitySaveService);
      await this.mediaBasicInfoService.createMediaBasicInfo(input.MediaBasicInfo, movie, this.entitySaveService);
      if (input.MediaAdditionalInfo) {
        await this.mediaAdditionalInfoService.createMediaAdditionalInfo(input.MediaAdditionalInfo, movie, this.entitySaveService);
      }
      if (input.MediaFinanacialInfo) {
        await this.financialInfoService.createFinancialInfo(input.MediaFinanacialInfo, movie, this.entitySaveService);
      }

      movie.manager = manager;

      this.entitySaveService.push(movie);
      await this.entitySaveService.saveMultiple();

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
