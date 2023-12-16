import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userDialog: boolean;

  users: User[];
  user: User=new User();

  selectedusers: User[];
  submitted: boolean;



  constructor(private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getAllUsers()
  }
getAllUsers(){
  this.userService.reloadUsers$.subscribe(x => {
  this.userService.getUsers().subscribe(data => this.users = data);
});
}

  openNew() {
      this.user = new User();
      this.submitted = false;
      this.userDialog = true;
  }

  deleteSelectedUsers() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected users?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.users = this.users.filter(val => !this.selectedusers.includes(val));
              this.selectedusers = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
          }
      });
      this.getAllUsers()
  }

  editUser(user: User) {
      this.user = {...user};
      this.userDialog = true;
  }

  // deleteUser(user: User) {
  //     this.confirmationService.confirm({
  //         message: 'Are you sure you want to delete ' + user.name + '?',
  //         header: 'Confirm',
  //         icon: 'pi pi-exclamation-triangle',
  //         accept: () => {
  //             this.userService.deleteUser(user.id).subscribe(()=>  this.getAllUsers())
  //             this.user =new User();
  //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
             
  //         }
  //     });
        
  // }

  hideDialog() {
      this.userDialog = false;
      this.submitted = false;
  }
  
  saveuser() {
      this.submitted = true;

      // if (this.user.name.trim()) {
      //     if (this.user.id) {
      //        this.userService.saveUser(this.user).subscribe(()=>{res=>console.log(res,"res saved")
      //        this.getAllUsers()})              
      //        this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
      //     }
          // else {
                
                this.userService.addUser(this.user).subscribe(()=>{res=>console.log(res,"res add")
                this.getAllUsers()}
              )
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Created', life: 3000});
         // }

          
          this.getAllUsers()
          this.users = [...this.users];
          this.userDialog = false;
          this.user = new User();
      //}   
  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }


}
