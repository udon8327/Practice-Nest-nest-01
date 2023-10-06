import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('/examples')
  getExample() {
    return [
      {
        id: 1,
        title: 'Example 1',
        description: '',
      },
    ];
  }
}
