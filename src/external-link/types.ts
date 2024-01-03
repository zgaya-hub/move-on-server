import { Cineast } from 'src/cineast/entities/cineast.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { Movie } from 'src/movie/entities/movie.entity';
import { Series } from 'src/series/entities/series.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

export type ExternalLinkParentType = Cineast | Movie | Series | Trailer | Episode;
