import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,route } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {DataService} from '../app/data.service';
import {data} from '../app/core/data';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    route,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,data],
  bootstrap: [AppComponent]
})
export class AppModule { }
