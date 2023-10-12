import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto, EditCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cats') private readonly catsModel) {}

  test() {
    return `Cats girl!!!`;
  }

  // DB
  async getCatsList(): Promise<void> {
    const cats = await this.catsModel.find();
    return cats;
  }

  async createCat(body: CreateCatDto): Promise<void> {
    await this.catsModel.create(body);
  }

  async editCat(_id: string, body: EditCatDto): Promise<void> {
    await this.catsModel.findByIdAndUpdate(_id, body);
  }

  async deleteCat(_id: string): Promise<void> {
    await this.catsModel.findByIdAndDelete(_id);
  }
  // DB

  create(body) {
    return `This action adds a new cat: ${body.name || '野良猫'}`;
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

  update(id: number) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
