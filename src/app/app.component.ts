import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './domain/product';
import { ProductService } from './services/productservice';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService,MessageService,ProductService]
})
export class AppComponent  {

}