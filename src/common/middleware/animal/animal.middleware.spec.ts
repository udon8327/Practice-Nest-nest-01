import { AnimalMiddleware } from './animal.middleware';

describe('AnimalMiddleware', () => {
  it('should be defined', () => {
    expect(new AnimalMiddleware()).toBeDefined();
  });
});
