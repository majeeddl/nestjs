import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Get('/exception')
  checkException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    //  throw new HttpException({
    //   status : HttpStatus.FORBIDDEN,
    //   error : "This is a custom message for exception"
    //  },HttpStatus.FORBIDDEN)
  }

  @Get('/custom_exception')
  checkCustomException() {
    throw new ForbiddenException()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
