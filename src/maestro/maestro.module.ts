import { Module } from '@nestjs/common';
import { MaestroService } from './maestro.service';
import { MaestroController } from './maestro.controller';
import { Maestro } from './maestro.entity/maestro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Maestro])],
  controllers: [MaestroController],
  providers: [MaestroService],
  exports:[MaestroService]
})
export class MaestroModule {}
