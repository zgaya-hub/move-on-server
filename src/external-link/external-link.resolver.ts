import { Resolver } from '@nestjs/graphql';
import { ExternalLinkService } from './external-link.service';
import { ExternalLink } from './entities/external-link.entity';

@Resolver(() => ExternalLink)
export class ExternalLinkResolver {
  constructor(private readonly externalLinkService: ExternalLinkService) {}
}
