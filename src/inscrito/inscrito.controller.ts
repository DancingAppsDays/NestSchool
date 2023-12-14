import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InscritoService } from './inscrito.service';
import { CreateInscritoDto } from './dto/create-inscrito.dto';
import { UpdateInscritoDto } from './dto/update-inscrito.dto';
import { Inscrito } from './entities/inscrito.entity';

@Controller('inscrito')
export class InscritoController {
  constructor(private readonly service: InscritoService) {}

  

  @Post()
  create(@Body() curso:Inscrito) {
    return this.service.create(curso);
  }

 

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('alumno/:id')
  findAllAlumno(@Param('id') idmaestro: string) {
    return this.service.findAllAlumno(+idmaestro);
  }

  @Get('maestro/:id/:idc')
  findAllMaestro(@Param('id') idmaestro: string,@Param('idc') idcurso: string) {
    return this.service.findAllMaestro(+idmaestro,+idcurso);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateinscrito:Inscrito) {
    return this.service.update(+id, updateinscrito);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

}
