import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenreUseCases } from '../use-cases/genre/genre.use-case';

@Controller('genre')
export class GenreController {
  constructor(private genreUseCases: GenreUseCases) {}

  @Get()
  async getAll() {
    return this.genreUseCases.getAllGenres();
  }

  //   @Get(':id')
  //   async getById(@Param('id') id: any) {
  //     return this.genreUseCases.getGenreById(id);
  //   }

  @Post()
  createGenre(@Body() genreDto: any) {
    return this.genreUseCases.createGenre({
      name: 'test',
      description: 'test',
    });
  }

  //   @Put(':id')
  //   updateGenre(
  //     @Param('id') genreId: string,
  //     @Body() updateGenreDto: UpdateGenreDto,
  //   ) {
  //     return this.genreUseCases.updateGenre(genreId, updateGenreDto);
  //   }
}
