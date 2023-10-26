import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { ExceptionFilter } from './filter/exception.filter';

const logger = new Logger('main.ts');
const port = process.env.PORT || 8000;

async function bootstrap() {
  initializeTransactionalContext();

  const adapter = new FastifyAdapter({
    logger: false,
  });

  const app = await NestFactory.create(AppModule, adapter);

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ExceptionFilter(httpAdapterHost));

  app.enableCors();

  await app.listen(port, '127.0.0.1');

  logger.log(`Application is listening on port ${port}`);
  logger.log(`Graphiql playground is available at http://127.0.0.1:${port}/graphql`);
}
bootstrap();
