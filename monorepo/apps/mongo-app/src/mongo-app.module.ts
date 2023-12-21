import { Module } from '@nestjs/common';
import { MongoAppController } from './mongo-app.controller';
import { MongoAppService } from './mongo-app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CatsModule],
  controllers: [MongoAppController],
  providers: [MongoAppService],
})
export class MongoAppModule {}
