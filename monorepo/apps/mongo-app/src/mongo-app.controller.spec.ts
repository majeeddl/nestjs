import { Test, TestingModule } from '@nestjs/testing';
import { MongoAppController } from './mongo-app.controller';
import { MongoAppService } from './mongo-app.service';

describe('MongoAppController', () => {
  let mongoAppController: MongoAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MongoAppController],
      providers: [MongoAppService],
    }).compile();

    mongoAppController = app.get<MongoAppController>(MongoAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mongoAppController.getHello()).toBe('Hello World!');
    });
  });
});
