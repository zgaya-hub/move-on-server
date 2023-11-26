import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';
import { RadisInputDto } from './dto/radis.input.dto';
import { RadisOutputDto } from './dto/radis.output.dto';

@Injectable()
export class RadisService {
  constructor(@InjectRedis() private readonly redisClient: Redis) {}

  async storeStringValueInTempStorage(input: RadisInputDto.StoreStringValueInTempStorageInput): Promise<RadisOutputDto.IdOutput> {
    try {
      const ID = uuid();

      await this.redisClient.setex(`${input.service}:${ID}`, input.ttl, input.value);
      return { ID };
    } catch (error) {
      throw new Error(error);
    }
  }

  async retrieveStringValueFromTempStorage(input: RadisInputDto.RetrieveStringValueFromTempStorageInput): Promise<RadisOutputDto.ValueOutput<string>> {
    try {
      const storedValue = await this.redisClient.getex(`${input.service}:${input.key}`);
      return { Value: JSON.stringify(storedValue) };
    } catch (error) {
      throw new Error(error);
    }
  }
}
