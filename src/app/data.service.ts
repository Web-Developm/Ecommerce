import { Injectable } from '@angular/core';
import { Product } from '../app/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = [

  ]


  constructor() { }
}
