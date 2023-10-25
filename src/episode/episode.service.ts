import { Injectable } from '@nestjs/common';
import { CreateEpisodeInput } from './dto/create-episode.input';
import { UpdateEpisodeInput } from './dto/update-episode.input';

@Injectable()
export class EpisodeService {
  create(createEpisodeInput: CreateEpisodeInput) {
    return 'This action adds a new episode';
  }

  findAll() {
    return `This action returns all episode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} episode`;
  }

  update(id: number, updateEpisodeInput: UpdateEpisodeInput) {
    return `This action updates a #${id} episode`;
  }

  remove(id: number) {
    return `This action removes a #${id} episode`;
  }
}
