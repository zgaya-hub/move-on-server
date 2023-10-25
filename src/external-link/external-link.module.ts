import { Module } from '@nestjs/common';
import { ExternalLinkService } from './external-link.service';
import { ExternalLinkResolver } from './external-link.resolver';

@Module({
  providers: [ExternalLinkResolver, ExternalLinkService],
})
export class ExternalLinkModule {}
