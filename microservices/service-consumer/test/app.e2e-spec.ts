import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ClientsModule } from '@nestjs/microservices/module';
import { ClientProxy, Transport } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        ClientsModule.register([
          {
            name: 'SERVICE_PROVIDER',
            transport: Transport.TCP,
          },
        ]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.connectMicroservice({
      transport: Transport.TCP,
    });

    // await app.startAllMicroservices();
    await app.init();

    client = app.get('SERVICE_PROVIDER');
    await client.connect();
  });

  afterAll(async () => {
    await app.close();
    client.close();
  });
  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  it('first microservice test', async () => {
    const pattern = { cmd: 'getHello' };
    const payload = [1, 2, 3];
    const command = client.send<string>(pattern, payload);
    const data: string = await lastValueFrom(command);

    expect(data).toBe('hello from service-provider');
  });
});
