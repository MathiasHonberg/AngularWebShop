import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Product } from '../entities/product';
import { DataService } from '../data.service';
import { AppState } from '../redux/store';
import { NgRedux } from '@angular-redux/store';
import { ProductActions } from '../find-a-product/product-actions';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  productForm: FormGroup;
  public isLoading: boolean;

  constructor(private fb: FormBuilder, private router: Router, private data: DataService,
    private auth: AuthService, private productActions: ProductActions, private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required],
      'quantity': ['', Validators.required],
    });

    this.ngRedux.select(x => x.products).subscribe(state => {
      this.isLoading = state.isLoading;
    })
  }

  onProductSubmit() : void {
    if(this.productForm.valid) {
      let product = this.productForm.value as Product;
      
      // This data.addProduct(product);
      this.productActions.createProduct(product);
    }
  }

}
