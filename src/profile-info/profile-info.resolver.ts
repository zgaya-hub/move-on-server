import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileInfoService } from './profile-info.service';
import { CreateProfileInfoInput } from './dto/create-profile-info.input';
import { UpdateProfileInfoInput } from './dto/update-profile-info.input';
import { ProfileInfo } from './entities/profile-info.entity';

@Resolver(() => ProfileInfo)
export class ProfileInfoResolver {
  constructor(private readonly profileInfoService: ProfileInfoService) {}

  @Mutation(() => ProfileInfo)
  createProfileInfo(@Args('createProfileInfoInput') createProfileInfoInput: CreateProfileInfoInput) {
    return this.profileInfoService.create(createProfileInfoInput);
  }

  @Query(() => [ProfileInfo], { name: 'profileInfo' })
  findAll() {
    return this.profileInfoService.findAll();
  }

  @Query(() => ProfileInfo, { name: 'profileInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profileInfoService.findOne(id);
  }

  @Mutation(() => ProfileInfo)
  updateProfileInfo(@Args('updateProfileInfoInput') updateProfileInfoInput: UpdateProfileInfoInput) {
    return this.profileInfoService.update(updateProfileInfoInput.id, updateProfileInfoInput);
  }

  @Mutation(() => ProfileInfo)
  removeProfileInfo(@Args('id', { type: () => Int }) id: number) {
    return this.profileInfoService.remove(id);
  }
}
