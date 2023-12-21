import { Controller, Get } from '@nestjs/common';
import { MongoAppService } from './mongo-app.service';

@Controller()
export class MongoAppController {
  constructor(private readonly mongoAppService: MongoAppService) {}

  @Get()
  getHello(): string {
    return this.mongoAppService.getHello();
  }
}
