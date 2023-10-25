import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ManagerActivityService } from './manager-activity.service';
import { CreateManagerActivityInput } from './dto/create-manager-activity.input';
import { UpdateManagerActivityInput } from './dto/update-manager-activity.input';
import { ManagerActivity } from './entities/manager-activity.entity';

@Resolver(() => ManagerActivity)
export class ManagerActivityResolver {
  constructor(private readonly managerActivityService: ManagerActivityService) {}

  @Mutation(() => ManagerActivity)
  createManagerActivity(@Args('createManagerActivityInput') createManagerActivityInput: CreateManagerActivityInput) {
    return this.managerActivityService.create(createManagerActivityInput);
  }

  @Query(() => [ManagerActivity], { name: 'managerActivity' })
  findAll() {
    return this.managerActivityService.findAll();
  }

  @Query(() => ManagerActivity, { name: 'managerActivity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.managerActivityService.findOne(id);
  }

  @Mutation(() => ManagerActivity)
  updateManagerActivity(@Args('updateManagerActivityInput') updateManagerActivityInput: UpdateManagerActivityInput) {
    return this.managerActivityService.update(updateManagerActivityInput.id, updateManagerActivityInput);
  }

  @Mutation(() => ManagerActivity)
  removeManagerActivity(@Args('id', { type: () => Int }) id: number) {
    return this.managerActivityService.remove(id);
  }
}
