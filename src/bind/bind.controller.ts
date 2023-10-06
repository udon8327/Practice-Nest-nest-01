import { Controller, Get } from '@nestjs/common';

@Controller('bind')
export class BindController {
  @Get('daze')
  get(): string {
    return 'Geto Daze!!';
  }
}
