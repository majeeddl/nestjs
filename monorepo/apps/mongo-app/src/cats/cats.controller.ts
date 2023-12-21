import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  async findAll() {
    return await this.catService.findAll();
  }

  @Post()
  async create() {
    await this.catService.create({
      name: 'Cat',
      age: 3,
      breed: 'Breed',
    });

    return true;
  }
}
