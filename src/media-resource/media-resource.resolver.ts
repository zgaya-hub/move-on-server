import { Resolver } from '@nestjs/graphql';
import { MediaResource } from './entities/media-resource.entity';

@Resolver(() => MediaResource)
export class MediaResourceResolver {}
