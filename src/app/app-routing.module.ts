import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListGiftsComponent } from './components/list-gifts/list-gifts.component';
import { HomeComponent } from './components/home/home.component';
import { HomeManegerComponent } from './components/home-maneger/home-maneger.component';
import { ListDonorsComponent } from './components/list-donors/list-donors.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'maneger',component:HomeManegerComponent,children:[
        {path:"gifts",component:ListGiftsComponent},
        {path:"donors",component:ListDonorsComponent},
        {path:'users',component:UsersComponent}
    ]},
    {path:'user',component:UserListComponent},
    {path:'cart',component:CartComponent},
    {path:'userDetails',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
