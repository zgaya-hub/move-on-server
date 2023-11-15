import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TrailerService } from './trailer.service';
import { Trailer } from './entities/trailer.entity';
import { CreateTrailerInput } from './dto/create-trailer.input';

@Resolver(() => Trailer)
export class TrailerResolver {
  constructor(private readonly trailerService: TrailerService) {}

  @Mutation(() => Trailer)
  createTrailer(@Args('createTrailerInput') createTrailerInput: CreateTrailerInput) {
    return this.trailerService.create(createTrailerInput);
  }
}
