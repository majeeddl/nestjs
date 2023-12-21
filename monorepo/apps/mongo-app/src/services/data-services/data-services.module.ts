import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../frameworks/mongo/mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class DataServicesModule {}
