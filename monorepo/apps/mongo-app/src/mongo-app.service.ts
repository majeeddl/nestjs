import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
