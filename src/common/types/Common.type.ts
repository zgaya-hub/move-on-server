import { Episode } from '@/episode/entities/episode.entity';
import { Movie } from '@/movie/entities/movie.entity';
import { Trailer } from '@/trailer/entities/trailer.entity';
import { Season } from '../../season/entities/season.entity';
import { Series } from '../../series/entities/series.entity';

export type MovierMediaType = Movie | Episode | Trailer | Season | Series;
