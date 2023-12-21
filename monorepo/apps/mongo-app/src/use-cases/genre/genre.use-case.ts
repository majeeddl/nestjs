import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts/data-service-abstract';
import { Genre } from '../../core/entities/genre.entitiy';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class GenreUseCases {
  constructor(
    private dataServices: IDataServices,
    // private genreFactoryService: GenreFactoryService,
    @InjectConnection() private connection: Connection,
  ) {}

  getAllGenres(): Promise<Genre[]> {
    return this.dataServices.genres.getAll();
  }

  //   getGenreById(id: any): Promise<Genre> {
  //     return this.dataServices.genres.get(id);
  //   }

  async createGenre(createGenreDto: any): Promise<Genre> {
    // const genre = this.genreFactoryService.createNewGenre(createGenreDto);
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      const result = await this.dataServices.genres.create(
        createGenreDto,
        session,
      );

      //   throw new Error('Test');
      const result2 = await this.dataServices.genres.create(
        {
          name: 'test 2',
        },
        session,
      );

      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  //   updateGenre(genreId: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
  //     const genre = this.genreFactoryService.updateGenre(updateGenreDto);
  //     return this.dataServices.genres.update(genreId, genre);
  //   }
}
