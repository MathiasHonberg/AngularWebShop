import { Product } from './entities/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createProduct(product: Product) {
    product.localFilter = 'Mathias';
    return this.http.post(this.baseUrl, product);
  }
}
