import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CrewService } from './crew.service';
import { Crew } from './entities/crew.entity';
import { CreateCrewInput } from './dto/create-crew.input';
import { UpdateCrewInput } from './dto/update-crew.input';

@Resolver(() => Crew)
export class CrewResolver {
  constructor(private readonly crewService: CrewService) {}

  @Mutation(() => Crew)
  createCrew(@Args('createCrewInput') createCrewInput: CreateCrewInput) {
    return this.crewService.create(createCrewInput);
  }

  @Query(() => [Crew], { name: 'crew' })
  findAll() {
    return this.crewService.findAll();
  }

  @Query(() => Crew, { name: 'crew' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.crewService.findOne(id);
  }

  @Mutation(() => Crew)
  updateCrew(@Args('updateCrewInput') updateCrewInput: UpdateCrewInput) {
    return this.crewService.update(updateCrewInput.id, updateCrewInput);
  }

  @Mutation(() => Crew)
  removeCrew(@Args('id', { type: () => Int }) id: number) {
    return this.crewService.remove(id);
  }
}
