import { Component, OnInit } from '@angular/core';
import { ProductActions } from './find-a-product/product-actions';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'webshop';

  constructor(private productActions: ProductActions, private authService: AuthService){}

  ngOnInit(): void {
    this.productActions.getProducts();

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.isLoggedIn = false;
  }
  
}
