import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AlumnoService {

  constructor(@InjectRepository(Alumno) private usersRepository: Repository<Alumno>,private userService:UsersService) { }

  async getMaestros(maestro: Alumno) : Promise<Alumno[]>{
    return await this.usersRepository.find();
  }
  async getMaestrosAll() : Promise<Alumno[]>{
    return await this.usersRepository.find();
  }
  
  async getMaestro(_id: number): Promise<Alumno[]>{
    return await this.usersRepository.find({
  
      //select:["fullName","birthday"],
      where:[{"id": _id}]
    });
  }
  
  async updateUser(user:Alumno) {
    return await this.usersRepository.save(user)
  }

  async createUser(user:Alumno) {
   let newalumno = await this.usersRepository.save(user)
   console.log(newalumno);
   return await this.userService.newalumno(newalumno);
  }
  
  /*
  async createUser(user: User){
  this.userRepository.save(user)
  }*/  //SAME SAME??
  
  async updateMaestro(_id:number, maestro:Alumno){
    return await this.usersRepository.update(_id,maestro);
  
  }
  
  async deleteUser(user: Alumno) {
    this.usersRepository.delete(user);
  }
  
  async findOne(username: string): Promise<Alumno | undefined> {
   

    return await this.usersRepository.findOne( {where:[{"email": username}]} );
  }

  async findOnewithPass(username: string): Promise<Alumno | undefined> {
         //console.log("find one with pass")
    return await this.usersRepository.findOne( {where:[{"email": username}]} );

      //almost but nah.
    //return await this.usersRepository.createQueryBuilder().where({"email": username}).addSelect(Alumno.password)
  }



  /*
  create(createAlumnoDto: CreateAlumnoDto) {
    return 'This action adds a new alumno';
  }

  findAll() {
    return `This action returns all alumno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }*/
}
