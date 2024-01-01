import { Injectable, NotFoundException } from '@nestjs/common';
import { SeriesCrewRepository } from './series-crew.repository';
import { NOT_FOUND_ERROR_ID } from './media-image.error-codes';
import { Crew } from 'src/crew/entities/crew.entity';

@Injectable()
export class SeriesCrewService {
  constructor(private readonly seriesCrewRepository: SeriesCrewRepository) {}
  async getSeriesCrewBySeriesId(seriesId: string): Promise<Crew> {
    try {
      const seriesCrew = await this.seriesCrewRepository.findSeriesCrewBySeriesId(seriesId).getOne();
      if (!seriesCrew) {
        throw new NotFoundException(NOT_FOUND_ERROR_ID);
      }

      return seriesCrew.crew;
    } catch (error) {
      throw new Error(error);
    }
  }
}
