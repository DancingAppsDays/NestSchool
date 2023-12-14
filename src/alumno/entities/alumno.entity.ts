
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class Alumno {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:99})
    fullName:string;

    @Column('date')
    birthday:Date;

    @Column({length:99})
    email:string;

    @Column({length:99 })//, select: false})
    password:string;


}
