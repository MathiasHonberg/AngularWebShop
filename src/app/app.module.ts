import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MathiasComponent } from './mathias/mathias.component';
import { FernandoComponent } from './fernando/fernando.component';
import { LoginComponent } from './login/login.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer, AppState } from './redux/store'; // Added this to get the root reducer
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { ProductComponent } from './product/product.component';
import { FindAProductComponent } from './find-a-product/find-a-product.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FilterProduct } from './find-a-product/product.filter';
import { DifferentFormsComponent } from './different-forms/different-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    MathiasComponent,
    FernandoComponent,
    HomeComponent,
    RegisterComponent,
    FrontpageComponent,
    FindAProductComponent,
    RegisterProductComponent,
    UserAdminComponent,
    ProductComponent, FilterProduct, DifferentFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatCardModule,
    ReactiveFormsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter) {

                this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize(/* args */);
  }
}
