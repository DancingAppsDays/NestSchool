import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { CursosController } from './cursos/cursos.controller';
import { AlumnoModule } from './alumno/alumno.module';
import { ConfigModule } from '@nestjs/config';
import { MaestroModule } from './maestro/maestro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maestro } from './maestro/maestro.entity/maestro.entity';
import { CursoModule } from './curso/curso.module';
import { Curso } from './curso/entities/curso.entity';
import { Alumno } from './alumno/entities/alumno.entity';
import { InscritoModule } from './inscrito/inscrito.module';
import { Inscrito } from './inscrito/entities/inscrito.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Users } from './users/users.entity/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3308,   //changed bc local bullshit
        username: 'root',
        password: "",
        database: 'test',
        entities: [ Maestro,Curso,Alumno,Inscrito,Users], //["src/**/**.entity{.ts,.js}"],
        synchronize: true,
      }

    ),
         AlumnoModule,
         MaestroModule,
         CursoModule,
         InscritoModule,
         UsersModule,
         AuthModule
        
        ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
