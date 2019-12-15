import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../entities/product';
import { FrontpageComponent } from '../frontpage/frontpage.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productDeleteEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private frontPage: FrontpageComponent) { }

  ngOnInit() {
  }

  onDeleteProduct(id: string) {
    this.productDeleteEmitter.emit(id);
  }

  addToCart(price: number) {
    this.frontPage.addToCart(price);
  }

}
