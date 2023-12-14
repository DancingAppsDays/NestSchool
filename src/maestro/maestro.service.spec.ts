import { Test, TestingModule } from '@nestjs/testing';
import { MaestroService } from './maestro.service';

describe('MaestroService', () => {
  let service: MaestroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaestroService],
    }).compile();

    service = module.get<MaestroService>(MaestroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
