import { Test, TestingModule } from '@nestjs/testing';
import { BindController } from './bind.controller';

describe('BindController', () => {
  let controller: BindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BindController],
    }).compile();

    controller = module.get<BindController>(BindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
