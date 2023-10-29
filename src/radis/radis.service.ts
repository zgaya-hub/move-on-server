import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RadisService {
  constructor(@InjectRedis() private readonly redisClient: Redis) {}

  async storeDataInInMemory<T>(key: string, data: T, ttl: number, service: string) {
    try {
      const serializedData = JSON.stringify(data);

      await this.redisClient.setex(`${service}:${key}`, ttl, serializedData);
    } catch (error) {
      throw new Error(error);
    }
  }
}
