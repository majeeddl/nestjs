import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Cat } from '../schemas/cat.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<Cat>,
    @InjectConnection() private connection: Connection,
  ) {}

  async create(createCatDto: any): Promise<Cat> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const createdCat = new this.catModel(createCatDto);
      await createdCat.save({ session });

      //   throw new Error('Test');

      const createdCatTwo = new this.catModel({
        name: 'Cat Two',
        age: 1,
        breed: 'Breed',
      });
      await createdCatTwo.save({ session });

      await session.commitTransaction();
      return createdCat;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
    // const createdCat = new this.catModel(createCatDto);
    // return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    const session = await this.connection.startSession();

    session.startTransaction();

    try {
      const findItem = await this.catModel.find().session(session);

      await session.commitTransaction();
      return findItem;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
