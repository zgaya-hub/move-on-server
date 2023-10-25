import { CreateEpisodeInput } from './create-episode.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEpisodeInput extends PartialType(CreateEpisodeInput) {
  @Field(() => Number)
  id: number;
}
