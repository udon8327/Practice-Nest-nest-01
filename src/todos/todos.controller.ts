import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo.dto';
import { todos } from './server/todos-mock';

let todosData = todos;

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): TodoDto[] {
    return todosData;
  }

  @Post()
  createTodo(@Body() createTodo: TodoDto): TodoDto {
    const newTodo: TodoDto = {
      id: (todosData.length + 1).toString(),
      ...createTodo,
    };
    todosData = [...todosData, newTodo];
    return newTodo;
  }

  @Put(':id')
  updateTodo(@Body() updateTodo: TodoDto, @Param('id') id): TodoDto {
    todosData = todosData.map((todo) =>
      todo.id === id ? { id: id, ...updateTodo } : todo,
    );
    return updateTodo;
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): TodoDto {
    const todoToDelete = todosData.find((todo) => todo.id === id);
    todosData = todosData.filter((todo) => todo.id !== id);
    return todoToDelete;
  }
}
