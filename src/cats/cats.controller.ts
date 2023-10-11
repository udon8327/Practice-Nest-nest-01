import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode, Redirect, Header, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('girl')
  test() {
    throw new HttpException(
      {
        code: 'C001',
        message: '出錯囉!',
        data: {
          url: 'https://www.google.com.tw/',
        },
      },
      HttpStatus.BAD_REQUEST,
    );
    return this.catsService.test();
  }

  @Post()
  create(@Body() body: CreateCatDto) {
    console.log('body: ', body);
    return this.catsService.create(body);
  }

  @Get()
  @Header('Cache-Control', 'no-store')
  findAll(@Query() query) {
    console.log('query:', query);
    return this.catsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log('id: ', params.id);
    return this.catsService.findOne(+params.id);
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
