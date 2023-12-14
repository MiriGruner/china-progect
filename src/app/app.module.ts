import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ListGiftsComponent } from './components/list-gifts/list-gifts.component';
import { ListDonorsComponent } from './components/list-donors/list-donors.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeManegerComponent } from './components/home-maneger/home-maneger.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        ListGiftsComponent,
        ListDonorsComponent,
        HomeComponent,
        HomeManegerComponent,
        UserListComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ToolbarModule,
        ConfirmDialogModule,
        RatingModule,
        InputNumberModule,
        InputTextareaModule,
        RadioButtonModule,
        DropdownModule,
        ButtonModule,
        CalendarModule,
        FileUploadModule,
        ReactiveFormsModule
    ],
    providers: [ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
