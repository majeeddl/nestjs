import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts/data-service-abstract';
import { MongoGenericRepository } from './mongo-generic-repository';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from '../../core/entities/genre.entitiy';
import { GenreDocument } from './model/genre.model';
import { Model } from 'mongoose';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  //   authors: MongoGenericRepository<Author>;
  //   books: MongoGenericRepository<Book>;
  genres: MongoGenericRepository<Genre>;

  constructor(
    // @InjectModel(Author.name)
    // private AuthorRepository: Model<AuthorDocument>,
    // @InjectModel(Book.name)
    // private BookRepository: Model<BookDocument>,
    @InjectModel(Genre.name)
    private GenreRepository: Model<GenreDocument>,
  ) {}

  onApplicationBootstrap() {
    // this.authors = new MongoGenericRepository<Author>(this.AuthorRepository);
    // this.books = new MongoGenericRepository<Book>(this.BookRepository, [
    //   'author',
    //   'genre',
    // ]);
    this.genres = new MongoGenericRepository<Genre>(this.GenreRepository);
  }
}
