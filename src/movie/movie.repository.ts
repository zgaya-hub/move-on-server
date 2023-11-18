import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from '../base/repository.base';

@Injectable()
export class MovieRepository extends Repository<Movie> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Movie, entityManager);
  }

  public async findMovieById(ID: string): Promise<Movie> {
    return await this.findOneBy({ ID });
  }
}
