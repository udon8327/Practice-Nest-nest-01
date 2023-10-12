import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { EditCatDto } from './dto/edit-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cats } from './interface/cats.interface';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cats') private readonly catsModel: Model<Cats>) {}

  test() {
    return `Cats girl!!!`;
  }

  // DB
  async getCatsList(): Promise<Cats[]> {
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

  create(body: CreateCatDto) {
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

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
