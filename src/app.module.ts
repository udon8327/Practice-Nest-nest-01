import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { CorsMiddleware } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalMiddleware } from './middleware/animal/animal.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { TodosModule } from './todos/todos.module';

const DBModule = MongooseModule.forRoot(
  'mongodb+srv://udon8327:hsnu108327@cluster-nest.nsgharc.mongodb.net/NestDB?retryWrites=true&w=majority',
);

@Module({
  imports: [DBModule, CatsModule, DogsModule, TodosModule],
  // imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(CorsMiddleware).forRoutes('*');
    consumer.apply(AnimalMiddleware).forRoutes('cats');
  }
}
