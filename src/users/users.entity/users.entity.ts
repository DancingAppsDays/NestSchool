import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

  
   @PrimaryGeneratedColumn()
   userId:number;

    @Column({ length: 99 })
    username:string;

    @Column({ length: 255 }) 
    password:string;

    @Column({ length: 20 }) 
    usertype:string;
}