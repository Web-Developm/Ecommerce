import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationExtras } from "@angular/router";
import {DataService} from '../app/data.service';
import {CartService} from '../app/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  call()
  {
    alert("Calling");
  }

  cart() {
    this.router.navigate(['cart'], { relativeTo: this.route });
  }

}
