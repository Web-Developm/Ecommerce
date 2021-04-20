import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../app/cart/cart.component';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './home/home.component';
import {ToysComponent} from '../app/toys/toys.component';
import {SportsComponent} from '../app/sports/sports.component';
import {ClothesComponent} from '../app/clothes/clothes.component';

const routes: Routes = [

  {
    path: 'app', component: AppComponent
  },

  {
    path: "cart", component: CartComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: '', redirectTo: "/home", pathMatch: 'full'
  },

  {
    path:"toys" , component:ToysComponent
  },

  {
    path:"sports", component:SportsComponent
  },

  {
    path:"clothes", component:ClothesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route = [CartComponent, AppComponent,ToysComponent,SportsComponent,ClothesComponent];
