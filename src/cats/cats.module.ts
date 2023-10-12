import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsSchema } from './schema/cats.schema';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

const DBModule = MongooseModule.forFeature([
  { name: 'Cats', schema: CatsSchema },
]);

@Module({
  imports: [DBModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
