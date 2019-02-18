import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduitService} from './produit/service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from './app.service';
import {XhrInterceptor} from './xhr.interceptor';
import {CookieService} from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [ProduitService,
              AppService,
             {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
              CookieService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
