import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../app/menu/menu.component';
import { CartComponent } from '../app/cart/cart.component';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'app', component: AppComponent
  },

  {
    path: 'menu', component: MenuComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: '', redirectTo: "/home", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route = [MenuComponent, CartComponent, AppComponent];
