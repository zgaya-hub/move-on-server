import { Module } from '@nestjs/common';
import { RadisService } from './radis.service';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  providers: [RadisService],
  imports: [
    RedisModule.forRoot({
      config: {
        url: 'redis://localhost:6379' /* `redis://${process.env.REDIS_PORT}:${process.env.REDIS_PORT}` */,
      },
    }),
  ],
})
export class RadisModule {}
