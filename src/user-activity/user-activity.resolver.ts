import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserActivityService } from './user-activity.service';
import { UserActivity } from './entities/user-activity.entity';
import { CreateUserActivityInput } from './dto/create-user-activity.input';
import { UpdateUserActivityInput } from './dto/update-user-activity.input';
import { User } from '@/user/entities/user.entity';

@Resolver(() => UserActivity)
export class UserActivityResolver {
  constructor(private readonly userActivityService: UserActivityService) {}

  @Mutation(() => UserActivity)
  createUserActivity(@Args('createUserActivityInput') createUserActivityInput: CreateUserActivityInput) {
    return this.userActivityService.create(createUserActivityInput);
  }

  @ResolveField(() => User) // Provide the explicit type here (User)
  async user(@Parent() userActivity: UserActivity): Promise<void> {
    // You may use this.userService to fetch the user based on userActivity
    // const userId = userActivity.userId; // Adjust the property name accordingly
    // return this.userService.findById(userId); // Replace with your actual user fetching logic
  }

  @Query(() => [UserActivity], { name: 'userActivity' })
  findAll() {
    return this.userActivityService.findAll();
  }

  @Query(() => UserActivity, { name: 'userActivity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userActivityService.findOne(id);
  }

  @Mutation(() => UserActivity)
  updateUserActivity(@Args('updateUserActivityInput') updateUserActivityInput: UpdateUserActivityInput) {
    return this.userActivityService.update(updateUserActivityInput.id, updateUserActivityInput);
  }

  @Mutation(() => UserActivity)
  removeUserActivity(@Args('id', { type: () => Int }) id: number) {
    return this.userActivityService.remove(id);
  }
}
