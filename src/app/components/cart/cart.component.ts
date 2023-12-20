import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {

  giftDialog: boolean;

  gifts: Gift[];
  gift: Gift=new Gift();

  selectedgifts: Gift[];
  submitted: boolean;
 sum:number=0;
  donors: any[]= ["tamar","shay","miri"];
  cart:Gift;
  constructor(  private confirmationService: ConfirmationService,private activatedroute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getAllGifts()

  }
getAllGifts(){
  this.gifts=JSON.parse(sessionStorage.getItem("cart"))
}

placeOrder(){
  if(sessionStorage.getItem("cart")=="[]"){
   alert("your cart is empty")
    return;
  }
    this.router.navigate(["../userDetails"],{relativeTo:this.activatedroute})
  

}
  deleteSelectedGifts() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected gifts?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.gifts = this.gifts.filter(val => !this.selectedgifts.includes(val));
              this.selectedgifts = null;
             
          }
      });
      this.getAllGifts()
  }


  deleteGift(gift: Gift) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + gift.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.gifts = this.gifts.filter(e=>e.id != gift.id)
            sessionStorage.setItem("cart",JSON.stringify(this.gifts))
            this.sum-=gift.price
          }
      });
        
  }
goTolList(){
  this.router.navigate(["../user"],{relativeTo:this.activatedroute});
}
}  
