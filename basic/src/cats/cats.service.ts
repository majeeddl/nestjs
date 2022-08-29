import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private cats:any = [
    {
      id: 1,
      name: 'cat one',
    },
    {
      id: 2,
      name: 'cat two',
    },
  ];

  create(createCatDto: CreateCatDto) {
    return this.cats.push(createCatDto)
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find(x=>x.id === id)
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    const findIndex = this.cats.find
    return this.cats[findIndex] = {...updateCatDto,id : id}
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
