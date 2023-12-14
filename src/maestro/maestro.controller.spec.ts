import { Test, TestingModule } from '@nestjs/testing';
import { MaestroController } from './maestro.controller';
import { MaestroService } from './maestro.service';

describe('MaestroController', () => {
  let controller: MaestroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaestroController],
      providers: [MaestroService],
    }).compile();

    controller = module.get<MaestroController>(MaestroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
