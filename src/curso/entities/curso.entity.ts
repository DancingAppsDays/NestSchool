import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:99})
    name:string;

    @Column('date')
    fechadeinicio:Date;

    @Column('date')
    fechadefinal:Date;

    @Column({length:99})
    namecarrera:string;

    @Column()
    idmaestro:number;

    @Column({length:99})
    namemaestro:string;

}
