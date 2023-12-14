import { Module } from '@nestjs/common';
import { InscritoService } from './inscrito.service';
import { InscritoController } from './inscrito.controller';
import { Inscrito } from './entities/inscrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Inscrito])],
  controllers: [InscritoController],
  providers: [InscritoService],
})
export class InscritoModule {}
