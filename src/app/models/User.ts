import { Gift } from "./Gift";

export class User{
    id:number=0;
    name:string="";
    email:string="";
    password:string="";
    creditCard:string="";
    tickets:Gift[]=null;
}