import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  giftDialog: boolean;
 cart:Gift[]=[];
  gifts: Gift[];
  gift: Gift=new Gift();

  selectedgifts: Gift[];
  submitted: boolean;

  donors: any[]= ["tamar","shay","miri"];

  constructor(private giftService: GiftService,private activatedroute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getAllGifts()

  ///שליפת מערך תורמים
  }
getAllGifts(){
  this.giftService.reloadGifts$.subscribe(x => {
  this.giftService.getGifts().subscribe(data => this.gifts = data);
});
}

  addToCart(gift:Gift){
    this.cart.push(gift)
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
}
goToCart(){
    this.router.navigate(["../cart"],{relativeTo:this.activatedroute});
  }
}
