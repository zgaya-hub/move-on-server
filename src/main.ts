import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext, StorageDriver } from 'typeorm-transactional';

const logger = new Logger('main.ts');
const port = process.env.PORT || 8000;

async function bootstrap() {
  initializeTransactionalContext({ storageDriver: StorageDriver.AUTO });

  const adapter = new FastifyAdapter({
    logger: false,
  });

  const app = await NestFactory.create(AppModule, adapter);

  app.useGlobalPipes(new ValidationPipe());
  // const httpAdapterHost = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new ExceptionFilter(httpAdapterHost));

  app.enableCors();

  await app.listen(port, '0.0.0.0');

  logger.log(`Application is listening on port ${port}`);
  logger.log(`Graphiql playground is available at http://127.0.0.1:${port}/graphql`);
}
bootstrap();
