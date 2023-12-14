import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Controller('curso')
export class CursoController {
  constructor(private cursoService: CursoService) {}

  @Post()
  create(@Body() curso:Curso) {
    return this.cursoService.create(curso);
    //return "asdfasdfasdf";
  }

 

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get('maestro/:id')
  findAllMaestro(@Param('id') id: string) {
    return this.cursoService.findAllMaestro(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurso:Curso) {
    return this.cursoService.update(+id, updateCurso);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }

  
}
