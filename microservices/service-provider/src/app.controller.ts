import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Request Response Pattern
   * @returns
   */
  @MessagePattern({ cmd: 'getHello' })
  getHello(): string {
    console.log('I am here in service provider');
    return 'hello from service-provider';
  }

  /**
   * Request Response Pattern (Async)
   * @returns
   */
  @MessagePattern({ cmd: 'getHelloAsync' })
  async getHelloAsync(): Promise<string> {
    return 'hello from service-provider';
  }

  @EventPattern('getHelloEvent')
  getHelloEvent() {
    console.log('hello from service-provider');
  }
}
