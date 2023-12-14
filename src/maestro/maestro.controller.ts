import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { MaestroService } from './maestro.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maestro } from './maestro.entity/maestro.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/roles/roles';
import { Role } from 'src/role.enum/role.enum';

@Controller('maestro')

  @UseGuards(AuthGuard) //whole controller
export class MaestroController {
  constructor(private service: MaestroService) { }


  @Roles(Role.Profesor,Role.Admin)
  @UseGuards(RolesGuard)
    @Get(':id')
    get(@Param() params) {
        return this.service.getMaestro(params.id);
    }

    @Roles(Role.Profesor,Role.Admin)
    @UseGuards(RolesGuard)
    @Get()
    findAll() {
      return this.service.getMaestrosAll();
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() user: Maestro) {
        return this.service.createMaestro(user);     
    }

    /*
    @Put()  //guess wont be used since it doesnt have /id
    update(@Body() user: Maestro) {
        return this.service.updateUser(user);
    }*/

   
    @Patch(':id')
    updates(@Param('id') id: string, @Body() updateMaestro:Maestro) {
      return this.service.updateMaestro(+id, updateMaestro);
    }


    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}


