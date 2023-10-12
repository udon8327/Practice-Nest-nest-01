import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode, Redirect, Header, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, EditCatDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // DB
  @Get('list')
  async getCatsList() {
    return {
      code: 200,
      data: await this.catsService.getCatsList(),
      message: '取得成功',
    };
  }

  @Post('create')
  async createCat(@Body() body: CreateCatDto) {
    console.log('body: ', body);
    return {
      code: 200,
      data: await this.catsService.createCat(body),
      message: '新增成功',
    };
  }

  @Post('edit/:id')
  async editCat(@Param() param, @Body() body: EditCatDto) {
    console.log('body: ', body);
    console.log('param: ', param);
    return {
      code: 200,
      data: await this.catsService.editCat(param.id, body),
      message: '編輯成功',
    };
  }

  @Delete('delete/:id')
  async deleteCat(@Param() param) {
    console.log('param: ', param);
    return {
      code: 200,
      data: await this.catsService.deleteCat(param.id),
      message: '刪除成功',
    };
  }
  // DB

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
  update(@Param('id') id: string, @Body() body) {
    return this.catsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
