import { Injectable } from '@nestjs/common';
import { CreateTrailerInput } from './dto/create-trailer.input';

@Injectable()
export class TrailerService {
  create(createTrailerInput: CreateTrailerInput) {
    return 'This action adds a new trailer';
  }
}
