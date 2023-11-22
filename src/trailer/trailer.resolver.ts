import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TrailerService } from './trailer.service';
import { Trailer } from './entities/trailer.entity';
import { JwtManagerAuthGuard } from '../auth/guards/current-manager.jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CommonOutputDto } from '../common/dto/common.dto';
import { CurrentUser } from '../decorator/current-user/current-user.decorator';
import { TrailerInputDto } from './dto/trailer.input.dto';

@Resolver(() => Trailer)
@UseGuards(JwtManagerAuthGuard)
export class TrailerResolver {
  constructor(private readonly trailerService: TrailerService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createTrailer(
    @Args('CreateTrailerInput')
    input: TrailerInputDto.CreateTrailerInput,
    @CurrentUser() manager: CurrentManagerType,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.trailerService.createTrailer(input, manager);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async updateTrailerBasicInfo(
    @Args('UpdateTrailerBasicInfoInput')
    input: TrailerInputDto.UpdateTrailerBasicInfoInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.trailerService.updateTrailerBasicInfo(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
