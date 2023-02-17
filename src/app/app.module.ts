import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { UserComponent } from './pages/user/user/user.component';
import { ProductsComponent } from './pages/user/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './pages/user/cart/cart.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
