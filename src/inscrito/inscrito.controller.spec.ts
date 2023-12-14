import { Test, TestingModule } from '@nestjs/testing';
import { InscritoController } from './inscrito.controller';
import { InscritoService } from './inscrito.service';

describe('InscritoController', () => {
  let controller: InscritoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscritoController],
      providers: [InscritoService],
    }).compile();

    controller = module.get<InscritoController>(InscritoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
