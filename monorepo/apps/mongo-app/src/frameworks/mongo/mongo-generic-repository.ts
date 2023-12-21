import { Model } from 'mongoose';
import { IGenericRepository } from '../../core/abstracts/generic-repository.abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  // get(id: any): Promise<T> {
  //   return this._repository.findById(id).populate(this._populateOnFind).exec();
  // }

  create(item: T, session: any): any {
    const createdItem = new this._repository(item);
    // return this._repository.create(item, { session });
    return createdItem.save({ session });
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }
}
