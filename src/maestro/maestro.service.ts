import { Injectable } from '@nestjs/common';
import { Maestro } from './maestro.entity/maestro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MaestroService { 
  constructor(@InjectRepository(Maestro) private usersRepository: Repository<Maestro>) { }


  async findOne(username: string): Promise<Maestro | undefined> {
    //return this.users.find(user => user.username === username);

    return await this.usersRepository.findOne( {where:[{"email": username}]} );
  }

async getMaestros(maestro: Maestro) : Promise<Maestro[]>{
  return await this.usersRepository.find();
}
async getMaestrosAll() : Promise<Maestro[]>{
  return await this.usersRepository.find();
}

async getMaestro(_id: number): Promise<Maestro[]>{
  return await this.usersRepository.find({

    //select:["fullName","birthday"],
    where:[{"id": _id}]
  });
}

async createMaestro(user: Maestro) {
  this.usersRepository.save(user)
}

/*
async createUser(user: User){
this.userRepository.save(user)
}*/  //SAME SAME??

async updateMaestro(_id:number, maestro:Maestro){
  return await this.usersRepository.update(_id,maestro);

}

async deleteUser(user: Maestro) {
  this.usersRepository.delete(user);
}




    
}
