import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user:User =new User()
  submitted: boolean;
  userDialog: boolean;
  users:User[];
  succ:boolean=false;
  constructor(private userService:UserService,private messageService:MessageService ){}
  ngOnInit() {
    this.userDialog=true;
  }
getAllUsers(){
  this.userService.reloadUsers$.subscribe(x => {
  this.userService.getUsers().subscribe(data => this.users = data);
});
}

 hideDialog() {
    this.userDialog = false;
    this.submitted = false;
}
openNew() {
  this.user = new User();
  this.submitted = false;
  this.userDialog = true;
}
addUser(){
  this.user.tickets=JSON.parse(sessionStorage.getItem("cart"))
  this.submitted = true;
    this.userService.addUser(this.user).subscribe(()=>{res=>console.log(res,"res add")
    this.succ=true;
    }
  )
  this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Created', life: 3000});
 this.succ=true;
  this.hideDialog()
}
}
