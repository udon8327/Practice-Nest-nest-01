import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { UserController } from './user/user.controller';
import { TodoModule } from './features/todo/todo.module';
import { BindController } from './bind/bind.controller';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [TodoModule, CatsModule, DogsModule],
  controllers: [AppController, TodoController, UserController, BindController],
  providers: [AppService],
})
export class AppModule {}
