import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProduitResolver} from './produit/ProduitResolver';
import {UserComponent} from './user/user.component';

export const appRoutes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'product', component: ProduitComponent, outlet: 'contentOutlet'/*, resolve: {produits: ProduitResolver }*/},
      {path: 'dashboard', component: DashboardComponent, outlet: 'contentOutlet'},

      {path: 'user', component: UserComponent, outlet: 'contentOutlet'},
    ]},
  {path: 'product', component: ProduitComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
imports: [
  RouterModule.forRoot(appRoutes, { enableTracing: false})
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
