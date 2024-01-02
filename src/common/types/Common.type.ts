import { Episode } from 'src/episode/entities/episode.entity';
import { Movie } from 'src/movie/entities/movie.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { Season } from 'src/season/entities/season.entity';
import { Series } from 'src/series/entities/series.entity';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { Manager } from 'src/manager/entities/manager.entity';

export type MovierMediaType = Movie | Episode | Trailer | Season | Series;
export type ImageAssignerType = Movie | Episode | Trailer | Season | Series | Cineast;
