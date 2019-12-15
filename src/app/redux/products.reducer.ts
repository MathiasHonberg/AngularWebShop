import { ProductActions } from './../find-a-product/product-actions';
import { tassign } from 'tassign';
import { ProductState } from './store';
import { DataService } from '../data.service';
import { Product } from '../entities/product';

let ds = new DataService();
const INITIAL_STATE: ProductState = {isProduct: false, products: [], isLoading: false };

export function productsReducer(state: ProductState = INITIAL_STATE, action: any) {
 switch (action.type) {
  case ProductActions.GET_PRODUCTS:
    return tassign(state, { products: action.payload });

  case ProductActions.IS_LOADING:
    return tassign(state, {isLoading: action.payload});

  case ProductActions.CREATE_PRODUCT:
    // Should: ___Create a new state object___
    // create a copy of the lifts-array.
    // Add the new lift to the copy of the array.

    // Mutating state. NOT ALLOWED!
    // state.lifts.push(action.payload);
    // return state;

    // const newLifts = state.lifts.concat([action.payload]);
    const newProducts = [...state.products, action.payload]; // Javascript spread operator
    return tassign(state, { products: newProducts, isLoading: false });
    
  case ProductActions.DELETE_PRODUCT:
    const afterDeleteProducts: Product[] = 
      state.products.filter(p => p._id !== action.payload);

    return tassign(state, { products: afterDeleteProducts });

    

  case ProductActions.SET_TYPE:
    
    // return Object.assign({}, state, { isLift: action.payload });
    return tassign(state, { isProduct: action.payload });

   default:
    return state;
}
}
