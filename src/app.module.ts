import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { SeriesModule } from './series/series.module';
import { SeasonModule } from './season/season.module';
import { EpisodeModule } from './episode/episode.module';
import { ManagerModule } from './manager/manager.module';
import { ProfileInfoModule } from './profile-info/profile-info.module';
import { UserActivityModule } from './user-activity/user-activity.module';
import { ManagerActivityModule } from './manager-activity/manager-activity.module';
import { CrewModule } from './crew/crew.module';
import { CineastModule } from './cineast/cineast.module';
import { CastModule } from './cast/cast.module';
import { MovieCrewModule } from './movie-crew/movie-crew.module';
import { MovieCastModule } from './movie-cast/movie-cast.module';
import { SeriesCastModule } from './series-cast/series-cast.module';
import { SeriesCrewModule } from './series-crew/series-crew.module';
import { MediaImageModule } from './media-image/media-image.module';
import { ExternalLinkModule } from './external-link/external-link.module';
import { ReviewModule } from './review/review.module';
import { AwsModule } from './aws/aws.module';
import { VideoModule } from './video/video.module';
import { ErrorLogModule } from './error-log/error-log.module';
import { CallerModule } from './caller/caller.module';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { FinancialInfoModule } from './financial-info/financial-info.module';
import { AchievementInfoModule } from './achievement-info/achievement-info.module';
import { MediaAdditionalInfoModule } from './media-additional-info/media-additional-info.module';
import { MediaBasicInfoModule } from './media-basic-info/media-basic-info.module';
import { RadisModule } from './radis/radis.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { TrailerModule } from './trailer/trailer.module';
import { MediaResourceModule } from './media-resource/media-resource.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          name: 'default',
          type: configService.get<string>('DB_TYPE') as 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          charset: configService.get<string>('DB_CHARSET'),
          entities: [`dist/**/entities/*.js`],
          synchronize: false,
          logging: true,
          migrations: [`dist/**/migrations/*.js`],
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid DB credentials specified');
        }
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MovieModule,
    UserModule,
    AuthModule,
    SeriesModule,
    SeasonModule,
    EpisodeModule,
    ManagerModule,
    ProfileInfoModule,
    UserActivityModule,
    ManagerActivityModule,
    CrewModule,
    CineastModule,
    CastModule,
    MovieCrewModule,
    MovieCastModule,
    SeriesCastModule,
    SeriesCrewModule,
    MediaImageModule,
    ExternalLinkModule,
    ReviewModule,
    AwsModule,
    VideoModule,
    ErrorLogModule,
    CallerModule,
    FinancialInfoModule,
    AchievementInfoModule,
    MediaAdditionalInfoModule,
    MediaBasicInfoModule,
    RadisModule,
    CloudinaryModule,
    TrailerModule,
    MediaResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
