import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';
import { RadisInputDto } from './dto/radis.input.dto';
import { RadisOutputDto } from './dto/radis.output.dto';

@Injectable()
export class RadisService {
  constructor(@InjectRedis() private readonly redisClient: Redis) {}

  async storeDataInTempStorage<T>(input: RadisInputDto.StoreDataInStorageInput<T>): Promise<RadisOutputDto.IdOutput> {
    try {
      const ID = uuid();
      const serializedData = JSON.stringify(input.data);

      await this.redisClient.setex(`${input.service}:${ID}`, input.ttl, serializedData);
      return { ID };
    } catch (error) {
      throw new Error(error);
    }
  }
}
