import { ProductActions } from './product-actions';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Product } from '../entities/product';

@Component({
  selector: 'app-find-a-product',
  templateUrl: './find-a-product.component.html',
  styleUrls: ['./find-a-product.component.scss']
})
export class FindAProductComponent implements OnInit {
  private isProduct: boolean;
  private products: Product[];
  cart: number;

  constructor(private productActions: ProductActions,
              private ngRedux: NgRedux<AppState>, private dataService: DataService) { }


  
  
  // Subscribe to the store.
  ngOnInit() {

    this.ngRedux.select(x => x.products).subscribe((state) => {
      this.isProduct = state.isProduct;
      this.products = state.products;
    });
  }

  onDeleteProduct(id: string): void {
    this.productActions.deleteProduct(id);
    // this.dataService.deleteProduct(id);
  }

  onTestClick(): void {
    // dispatch action by calling an action creator.
    this.productActions.setType(true);
  }

  addToCart(price: number): void {
    this.cart += price;
  }

}
