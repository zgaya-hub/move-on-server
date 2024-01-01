import { Injectable, NotFoundException } from '@nestjs/common';
import { SeriesCineastRepository } from './series-cineast.repository';
import { NOT_FOUND_ERROR_ID } from './series-cineast.error-codes';
import { Cineast } from 'src/cineast/entities/cineast.entity';

@Injectable()
export class SeriesCineastService {
  constructor(private readonly seriesCineastRepository: SeriesCineastRepository) {}
  async getSeriesCineastBySeriesId(mediaId: string): Promise<Cineast> {
    try {
      const seriesCineast = await this.seriesCineastRepository.findSeriesCineastBySeriesId(mediaId).getOne();
      if (!seriesCineast) {
        throw new NotFoundException(NOT_FOUND_ERROR_ID);
      }

      return seriesCineast.cineast;
    } catch (error) {
      throw new Error(error);
    }
  }
}
