import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Movie } from './entities/movie.entity';
import { MovieInputDto } from './dto/movie.input.dto';
import { Transactional } from 'typeorm-transactional';
import { ManagerService } from '../manager/manager.service';

@Injectable()
export class MovieService {
  constructor(private readonly videoService: VideoService, private readonly managerService: ManagerService) {}
  // constructor(private readonly awsS3Service: AwsS3Service) {}
  /*  getMovies(createMovieInput: MovieDto.UploadVideoInput) {
    return 'This action adds a new movie';
  } */

  @Transactional()
  async createMovie(input: MovieInputDto.CreateMovieInput, currentManager: CurrentManagerType): Promise<Movie> {
    try {
      const movie = new Movie();

      const manager = await this.managerService.findByEmail(currentManager.email);
      const video = await this.videoService.assignVideoToMedia(input.videoId, movie);

      movie.video = video;
      movie.manager = manager;

      return movie;
    } catch (error) {
      throw new Error(error);
    }
  }
}
