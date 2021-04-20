import { Component, OnInit } from '@angular/core';
import {data} from '../core/data';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(public dt:data) { }

  ngOnInit(): void {
  }

  public products:any=this.dt.products;

}
