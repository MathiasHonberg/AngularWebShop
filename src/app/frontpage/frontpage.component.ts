import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  cart: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addToCart(price: number){

    this.cart += Number(price);
    console.log("Price: " + price);
    console.log("Cart: " + this.cart)
  }
}
