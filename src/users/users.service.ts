import { Injectable } from '@nestjs/common';
import { Users} from './users.entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    
    private readonly users = [
        {
          userId: 1,
          username: 'user1',
          password: 'pass',
          usertype: 'admin'
        },
        {
          userId: 2,
          username: 'user2',
          password: 'pass',
          usertype:'prof'
        },
      ];
    
      async findOne(username: string): Promise<Users | undefined> {
        //return this.users.find(user => user.username === username);

        return await this.usersRepository.findOne( {where:[{"username": username}]} );
      }


      async createUser(user: Users) {
        this.usersRepository.save(user)
      }

      async newalumno(user:any){

        console.log("new user");
        this.usersRepository.save({username: user.email, })

        
      }
}
