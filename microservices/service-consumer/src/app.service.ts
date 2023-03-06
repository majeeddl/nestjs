import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(@Inject('SERVICE_PROVIDER') private client: ClientProxy) {}

  async getHello() {
    const pattern = { cmd: 'getHello' };
    const payload = [1, 2, 3];
    const command = this.client.send<string>(pattern, payload);
    const data:string = await lastValueFrom(command);
    console.log(data);
    return data;
  }
}
