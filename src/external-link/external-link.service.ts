import { Injectable } from '@nestjs/common';
import { ExternalLinkInputDto } from './dto/external-link.input.dto';
import { CommonOutputDto } from 'src/common/dto/common.dto';
import { ExternalLink } from './entities/external-link.entity';
import { EntitySaveService } from 'src/adapter/save.service';
import { ExternalLinkParentEnum } from './enum/external-link.enum';
import { ExternalLinkParentType } from './types';
import { CineastService } from 'src/cineast/cineast.service';
import { MovieService } from 'src/movie/movie.service';
import { EpisodeService } from 'src/episode/episode.service';
import { TrailerService } from 'src/trailer/trailer.service';
import { SeriesService } from 'src/series/series.service';
import { Movie } from 'src/movie/entities/movie.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { Series } from 'src/series/entities/series.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { Cineast } from 'src/cineast/entities/cineast.entity';

@Injectable()
export class ExternalLinkService {
  constructor(
    private readonly cineastService: CineastService,
    private readonly movieService: MovieService,
    private readonly episodeService: EpisodeService,
    private readonly trailerService: TrailerService,
    private readonly seriesService: SeriesService,
    private readonly entitySaveService: EntitySaveService,
  ) {}

  async createExternalLink(input: ExternalLinkInputDto.CreateExternalLinkInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const externalLink = new ExternalLink();

      const parent = this.findParentByIdAndType(input.ParentId, input.ParentType);

      if (parent instanceof Movie) externalLink.movie = parent;
      if (parent instanceof Trailer) externalLink.trailer = parent;
      if (parent instanceof Series) externalLink.series = parent;
      if (parent instanceof Episode) externalLink.episode = parent;
      if (parent instanceof Cineast) externalLink.cineast = parent;

      externalLink.url = input.Url;
      externalLink.resourceName = input.ResourceName;

      await this.entitySaveService.save<ExternalLink>(externalLink);

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  private async findParentByIdAndType(parentId: string, type: ExternalLinkParentEnum): Promise<ExternalLinkParentType> {
    try {
      let parent: ExternalLinkParentType;

      if (type === ExternalLinkParentEnum.CINEAST) {
        parent = await this.cineastService.findCineastById(parentId);
      }

      if (type === ExternalLinkParentEnum.EPISODE) {
        parent = await this.episodeService.findEpisodeById(parentId);
      }

      if (type === ExternalLinkParentEnum.MOVIE) {
        parent = await this.movieService.findMovieById(parentId);
      }

      if (type === ExternalLinkParentEnum.SERIES) {
        parent = await this.seriesService.findSeriesById(parentId);
      }

      if (type === ExternalLinkParentEnum.TRAILER) {
        parent = await this.trailerService.findTrailerById(parentId);
      }

      return parent;
    } catch (error) {
      throw new Error(error);
    }
  }
}
