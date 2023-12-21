import { Module } from '@nestjs/common';
import { MongoAppController } from './mongo-app.controller';
import { MongoAppService } from './mongo-app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { DataServicesModule } from './services/data-services/data-services.module';
import { GenreUseCasesModule } from './use-cases/genre/genre-use-cases.module';
import { GenreController } from './controllers/genre.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CatsModule,
    DataServicesModule,
    GenreUseCasesModule,
  ],
  controllers: [MongoAppController, GenreController],
  providers: [MongoAppService],
})
export class MongoAppModule {}
