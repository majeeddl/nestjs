// import { Author, Book, Genre } from '../entities';
import { Genre } from '../entities/genre.entitiy';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract genres: IGenericRepository<Genre>;
}
