import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeasonService } from './season.service';
import { Season } from './entities/season.entity';
import { CreateSeasonInput } from './dto/create-season.input';
import { UpdateSeasonInput } from './dto/update-season.input';

@Resolver(() => Season)
export class SeasonResolver {
  constructor(private readonly seasonService: SeasonService) {}

  @Mutation(() => Season)
  createSeason(@Args('createSeasonInput') createSeasonInput: CreateSeasonInput) {
    return this.seasonService.create(createSeasonInput);
  }

  @Query(() => [Season], { name: 'season' })
  findAll() {
    return this.seasonService.findAll();
  }

  @Query(() => Season, { name: 'season' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seasonService.findOne(id);
  }

  @Mutation(() => Season)
  updateSeason(@Args('updateSeasonInput') updateSeasonInput: UpdateSeasonInput) {
    return this.seasonService.update(updateSeasonInput.id, updateSeasonInput);
  }

  @Mutation(() => Season)
  removeSeason(@Args('id', { type: () => Int }) id: number) {
    return this.seasonService.remove(id);
  }
}
