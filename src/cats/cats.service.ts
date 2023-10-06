import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  test() {
    return `Cats girl!!`;
  }

  create(body: CreateCatDto) {
    return `This action adds a new cat: ${body.name}`;
  }

  findAll(query) {
    const sexObj = {
      '0': '男',
      '1': '女',
      '2': '不明',
    };
    return `This action get all cats ${sexObj[query.sex]}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
