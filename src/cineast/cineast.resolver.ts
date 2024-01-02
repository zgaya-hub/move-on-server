import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CineastService } from './cineast.service';
import { Cineast } from './entities/cineast.entity';
import { CineastInputDto } from './dto/cineast.input.dto';
import { CommonOutputDto } from 'src/common/dto/common.dto';

@Resolver(() => Cineast)
export class CineastResolver {
  constructor(private readonly cineastService: CineastService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createCineast(
    @Args('CreateCineastInput')
    input: CineastInputDto.CreateCineastInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.cineastService.createCineast(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
