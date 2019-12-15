import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { productsReducer } from './products.reducer';
import { Product } from '../entities/product';

export class ProductState {
  isProduct: boolean;
  products: Product[];
  isLoading: boolean;
}
export class AppState {
  products?: ProductState;
}
export const rootReducer = combineReducers<AppState>({
    products: productsReducer,

router: routerReducer
} as any) ;
