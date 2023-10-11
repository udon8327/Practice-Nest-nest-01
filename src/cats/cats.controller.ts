import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode, Redirect, Header, Query} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('girl')
  test() {
    return this.catsService.test();
  }

  @Post()
  @Redirect('https://www.google.com.tw/', 301)
  create(@Body() body: CreateCatDto) {
    console.log('body: ', body);
    return this.catsService.create(body);
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  @Header('Cache-Control', 'no-store')
  findAll(@Query() query) {
    console.log('query:', query);
    return this.catsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('id: ', id);
    return this.catsService.findOne(+id);
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
