import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Product } from '../entities/product';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class ProductActions {
constructor(private ngRedux: NgRedux<AppState>, private apiService: ApiService,
  private router: Router /* Autowired */) {} 
  
  
  static SET_TYPE: string = 'SET_TYPE'; 
  static MyAction: string = 'MY_ACTION'; 
  static CREATE_PRODUCT: string = 'CREATE_PRODUCT'; 
  static DELETE_PRODUCT: string = 'DELETE_PRODUCT';
  static ADD_TO_CART: string = "ADD_TO_CART"; 
  
  static IS_LOADING: string = 'IS_LOADING'; 
  
  static GET_PRODUCTS: string = 'GET_PRODUCTS'; 
  
  getProducts() {
    
    this.apiService.getAllProducts().subscribe((result: any[]) => {
      const myProducts = result.filter(x => x.localFilter === 'Mathias'); // Hack to only display my data.
      
      this.ngRedux.dispatch({
        type: ProductActions.GET_PRODUCTS,
        payload: myProducts
      });
    });


    
  }
  
  createProduct(product: Product): void {

    this.ngRedux.dispatch({
      type: ProductActions.IS_LOADING,
      payload: true
    });


    this.apiService.createProduct(product).subscribe((productObjFromApi: Product) => {
      
      this.ngRedux.dispatch({
        type: ProductActions.CREATE_PRODUCT,
        payload: productObjFromApi
      });
      this.router.navigate(['/frontpage/findaproduct']);
    });

    console.log("Hi, how you doooin");
    
  }

  deleteProduct(id: string): void {
    this.ngRedux.dispatch({
      type: ProductActions.DELETE_PRODUCT,
      payload: id
    });
  }

  
  callMyAction(isProduct: boolean): void {
    this.ngRedux.dispatch({
      type: ProductActions.MyAction,
      payload: isProduct
    });
  }

  setType(isProduct: boolean): void {
    this.ngRedux.dispatch({
      type: ProductActions.SET_TYPE,
      payload: isProduct
    });
  }
}
