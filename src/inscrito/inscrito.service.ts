import { Injectable } from '@nestjs/common';
import { CreateInscritoDto } from './dto/create-inscrito.dto';
import { UpdateInscritoDto } from './dto/update-inscrito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscrito } from './entities/inscrito.entity';

@Injectable()
export class InscritoService {
   
  constructor(@InjectRepository(Inscrito) private cursoRepository: Repository<Inscrito>) { }
  
  
  async create(createCurso: Inscrito) {
    return await this.cursoRepository.save(createCurso);
  }

  async findAll(): Promise <Inscrito[]> {
    return await this.cursoRepository.find();
  }

  async findAllMaestro(idm: number,idc:number): Promise <Inscrito[]> {
    return await this.cursoRepository.find( 
      { where:[{"idmaestro": idm, "idcurso":idc}] } );
  }

  async findAllAlumno(idm: number): Promise <Inscrito[]> {
    return await this.cursoRepository.find( 
      { where:[{"idalumno": idm}] } );
  }

  async findOne(id: number) :Promise<Inscrito[]>{
    return await this.cursoRepository.find( 
      { where:[{"id": id}] } );
  }

  async update(id: number, updateCurso: Inscrito) {
    return await this.cursoRepository.update(id,updateCurso);
  }

  async remove(id: number) {
    return this.cursoRepository.delete( id );
  }
}
