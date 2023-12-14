import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constans/constans';
import { AlumnoModule } from 'src/alumno/alumno.module';
import { MaestroModule } from 'src/maestro/maestro.module';
import { AlumnoService } from 'src/alumno/alumno.service';

@Module({
  imports:[AlumnoModule, UsersModule, AlumnoModule, MaestroModule,
    JwtModule.register({
      global:true,
      secret:jwtConstants.secret,
      //signOptions:{expiresIn: '3600s' }
    })
  
  
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
