import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AnimalMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('動物');
    next();
  }
}
