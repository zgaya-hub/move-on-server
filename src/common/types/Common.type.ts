import { Episode } from '@/episode/entities/episode.entity';
import { Movie } from '@/movie/entities/movie.entity';
import { Season } from '@/season/entities/season.entity';
import { Series } from '@/series/entities/series.entity';

export type MovierMediaType = Movie | Series | Episode | Season;
