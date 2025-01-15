import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material imports
import { LoginComponent } from './login/login.component'; //login page

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomPipe } from './custom.pipe';

import { SnackBarComponent } from './snack-bar/snack-bar.component';
// import { BuyComponent } from './buy/buy.component';
// import { RentComponent } from './rent/rent.component';
// import { AddProductComponent } from './add-product/add-product.component'; //icon badges

@NgModule({
  // chestii create de noi
  declarations: [

  ],
  // module importate din material
  imports: [

  ],
  // acces la unele servicii
  providers: [],
  // :P
  bootstrap: [AppComponent]
})
export class AppModule { }