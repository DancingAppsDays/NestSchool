import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly service: AlumnoService) {}

    /*
  @Post()
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  findAll() {
    return this.alumnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoService.update(+id, updateAlumnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoService.remove(+id);
  }
  */
  @Get(':id')
  get(@Param() params) {
      return this.service.getMaestro(params.id);
  }

  @Get()
  findAll() {
    return this.service.getMaestrosAll();
  }

  @Post()
  create(@Body() user: Alumno) {
      return this.service.createUser(user);     //MISSING CREATE USER
  }

  @Put()  //guess wont be used since it doesnt have /id
  update(@Body() user: Alumno) {
      return this.service.updateUser(user);
  }

 
  @Patch(':id')
  updates(@Param('id') id: string, @Body() updateMaestro:Alumno) {
    return this.service.updateMaestro(+id, updateMaestro);
  }


  @Delete(':id')
  deleteUser(@Param() params) {
      return this.service.deleteUser(params.id);
  }
}
