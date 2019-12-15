import { User } from './entities/user';
import { Injectable } from '@angular/core';
import { Product } from './entities/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  tempData: Product[] = [
    {_id: '1',
    name: 'Apples',
    quantity: 4, 
    price: 10 }, 
    
    
    {_id: '2', 
    name: 'T-bone steak',
    quantity: 1,
    price: 80},
    
    {_id: '3', 
    name: 'Beer',
    quantity: 6,
    price: 50}
  ];

  constructor() { }

  addProduct(product: Product): void {
    // Generate an _id until we learn to call the web service
    // where an id will be generated for us.
    this.tempData.push(product);
  }

  deleteProduct(id: string): void {
    //filter might be helpful
    this.tempData = this.tempData.filter(p => p._id !== id );

  }
}
