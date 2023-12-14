import { Injectable } from '@nestjs/common';
//import { CreateCursoDto } from './dto/create-curso.dto';
//import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CursoService {
 
  constructor(@InjectRepository(Curso) private cursoRepository: Repository<Curso>) { }
  
  
  async create(createCurso: Curso) {
    return await this.cursoRepository.save(createCurso);
  }

  async findAll(): Promise <Curso[]> {
    return await this.cursoRepository.find();
  }

  async findOne(id: number) :Promise<Curso[]>{
    return await this.cursoRepository.find( 
      { where:[{"id": id}] } );
  }

  async findAllMaestro(idm: number): Promise <Curso[]> {
    return await this.cursoRepository.find( 
      { where:[{"idmaestro": idm}] } );
  }

  async update(id: number, updateCurso: Curso) {
    return await this.cursoRepository.update(id,updateCurso);
  }

  remove(id: number) {
    return this.cursoRepository.delete( id );
  }
}
