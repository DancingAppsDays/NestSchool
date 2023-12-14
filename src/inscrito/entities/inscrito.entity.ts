import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inscrito {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    idcurso:number;   

    @Column()
    idalumno:number;

    @Column()
    idmaestro:number;   

    @Column()
    calificacion:number;

    @Column({ length: 99 })
    namecurso:string;

    @Column({ length: 99 })
    namecarrera:string;

    @Column({ length: 99 })
    namealumno:string;

    @Column({ length: 99 })
    namemaestro:string;

}
