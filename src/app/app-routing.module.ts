import { AdminGuard } from './auth/admin.guard';
import { AuthGuard } from './auth/auth.guard';
import { RegisterProductComponent } from './register-product/register-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MathiasComponent } from './mathias/mathias.component';
import { FernandoComponent } from './fernando/fernando.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FindAProductComponent } from './find-a-product/find-a-product.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { DifferentFormsComponent } from './different-forms/different-forms.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'login', component: LoginComponent },  
    { path: 'register', component: RegisterComponent }, 
    { path: 'different-forms', component: DifferentFormsComponent }, 
    { path: 'about', component: AboutComponent, children: [
      { path: 'mathias', component: MathiasComponent },
      { path: 'fernando', component: FernandoComponent }
    ]},  
  ]},
  { path: 'frontpage', component: FrontpageComponent , canActivate: [AuthGuard], children: [
    { path: 'findaproduct', component: FindAProductComponent },
    { path: 'registerproduct', component: RegisterProductComponent },
    { path: 'user-admin', component: UserAdminComponent, canActivate: [AdminGuard] }
  ]},

  { path: '**', component: PageNotFoundComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
