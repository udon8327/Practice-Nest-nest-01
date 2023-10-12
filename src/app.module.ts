import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AnimalMiddleware } from './middleware/animal/animal.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { UserController } from './user/user.controller';
import { TodoModule } from './features/todo/todo.module';
import { BindController } from './bind/bind.controller';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    TodoModule,
    CatsModule,
    DogsModule,
    MongooseModule.forRoot(
      'mongodb+srv://udon8327:hsnu108327@cluster-nest.nsgharc.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, TodoController, UserController, BindController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AnimalMiddleware).forRoutes('cats');
  }
}
