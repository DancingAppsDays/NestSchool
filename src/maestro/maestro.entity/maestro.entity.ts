import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Maestro {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 99 })
    fullName:string;

    @Column('date') 
    birthday:Date;

    @Column({length:99})
    email:string;

    @Column({length:99})
    password:string;
}
