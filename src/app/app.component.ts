import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private route:ActivatedRoute, private router:Router)
  {

  }

  cart()
  {
    this.router.navigate(['cart'], {relativeTo:this.route});
  }

}
