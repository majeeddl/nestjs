import { NestFactory } from '@nestjs/core';
import { MongoAppModule } from './mongo-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MongoAppModule);
  await app.listen(3000);
}
bootstrap();
