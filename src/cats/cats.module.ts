import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { catsSchema } from './schema/cats.schema';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cats', schema: catsSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
