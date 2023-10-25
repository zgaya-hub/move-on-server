import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ErrorLogService } from './error-log.service';
import { ErrorLog } from './entities/error-log.entity';
import { ErrorLogInputDto } from './dto/error-log.input';

@Resolver(() => ErrorLog)
export class ErrorLogResolver {
  constructor(private readonly errorLogService: ErrorLogService) {}

  @Mutation(() => ErrorLog)
  createErrorLog(@Args('CreateErrorLogInput') input: ErrorLogInputDto.CreateErrorLogInput): Promise<ErrorLog> {
    return this.errorLogService.create(input);
  }
}
