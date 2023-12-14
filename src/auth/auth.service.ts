import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {JwtModule, JwtService} from '@nestjs/jwt'
import { AlumnoService } from 'src/alumno/alumno.service';
import { MaestroService } from 'src/maestro/maestro.service';
import { Maestro } from 'src/maestro/maestro.entity/maestro.entity';
import { Users } from 'src/users/users.entity/users.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,private alumnoService:AlumnoService,private jwtService:JwtService,private mService:MaestroService){}//private alumnoService:AlumnoService, private maestroService:MaestroService, 

    async signIn(username: string,pass:string): Promise<any>{

        let payload:any,user:Users,alumno:Alumno,maestro:Maestro

         user = await this.usersService.findOne(username);
        console.log(user);
        if (user?.password == pass) {
           payload = { userId: user.userId, username: user.username, usertype:user.usertype };
          
        }else{ 
         alumno = await this.alumnoService.findOnewithPass(username);
        console.log(alumno)
        if (alumno?.password == pass) {
          payload = { userId: alumno.id, username: alumno.fullName, usertype:'Student' };

        }else{
         maestro = await this.mService.findOne(username);
        console.log(maestro)
        if (maestro?.password == pass) {
          payload = { userId: maestro.id, username: maestro.fullName, usertype:'Profesor' };

        }else{
          throw new UnauthorizedException();
        }        
        }
        }

      //  const payload = { userId: user.userId, username: user.username, usertype:user.usertype };
    return {
      status : "success",
      access_token: await this.jwtService.signAsync(payload),
      payload
      //payload,
      //username,
      //user,
     // payload{ x: user.userId}
      //{user.usertype}
      //user['userId']
      //user.usertype
      //usertype : payload.usertype ALREADY UN PAYLOAD=?
    };

    }


}
