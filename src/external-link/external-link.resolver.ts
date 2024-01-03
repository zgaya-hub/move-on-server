import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ExternalLinkService } from './external-link.service';
import { ExternalLink } from './entities/external-link.entity';
import { ExternalLinkInputDto } from './dto/external-link.input.dto';
import { CommonOutputDto } from 'src/common/dto/common.dto';

@Resolver(() => ExternalLink)
export class ExternalLinkResolver {
  constructor(private readonly externalLinkService: ExternalLinkService) {}

  @Mutation(() => CommonOutputDto.SuccessOutput)
  async createExternalLink(
    @Args('CreateExternalLinkInput')
    input: ExternalLinkInputDto.CreateExternalLinkInput,
  ): Promise<CommonOutputDto.SuccessOutput> {
    try {
      return this.externalLinkService.createExternalLink(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
