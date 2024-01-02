import { Injectable, NotFoundException } from '@nestjs/common';
import { SeriesCineastRepository } from './series-cineast.repository';
import { NOT_FOUND_ERROR_ID } from './series-cineast.error-codes';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { SeriesCineastInputDto } from './dto/series-cineast.input.dto';
import { CommonOutputDto } from 'src/common/dto/common.dto';
import { SeriesService } from 'src/series/series.service';
import { CineastService } from 'src/cineast/cineast.service';
import { SeriesCineast } from './entities/series-cineast.entity';
import { EntitySaveService } from 'src/adapter/save.service';

@Injectable()
export class SeriesCineastService {
  constructor(
    private readonly seriesCineastRepository: SeriesCineastRepository,
    private readonly seriesService: SeriesService,
    private readonly cineastService: CineastService,
    private readonly entitySaveService: EntitySaveService,
  ) {}

  async createSeriesCineast(input: SeriesCineastInputDto.CreateSeriesCineastInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const seriesCineast = new SeriesCineast();

      const series = await this.seriesService.findSeriesById(input.SeriesId);
      const cineast = await this.cineastService.findCineastById(input.SeriesId);

      seriesCineast.series = series;
      seriesCineast.cineast = cineast;

      await this.entitySaveService.save<SeriesCineast>(seriesCineast);

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCineastsBySeriesId(mediaId: string): Promise<Cineast[]> {
    try {
      const seriesCineast = await this.seriesCineastRepository.findSeriesCineastBySeriesId(mediaId).getMany();
      if (!seriesCineast) {
        throw new NotFoundException(NOT_FOUND_ERROR_ID);
      }

      const cineast = seriesCineast.map((e) => e.cineast);

      return cineast;
    } catch (error) {
      throw new Error(error);
    }
  }
}
