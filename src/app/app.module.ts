import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,route } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {DataService} from '../app/data.service';
import {data} from '../app/core/data';
import { ToysComponent } from './toys/toys.component';
import { SportsComponent } from './sports/sports.component';
import { ClothesComponent } from './clothes/clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    route,
    CartComponent,
    HomeComponent,
    ToysComponent,
    SportsComponent,
    ClothesComponent
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
