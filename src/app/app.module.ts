import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { HomeFirstComponent } from './home-first/home-first.component';
import { HomeSecondComponent } from './home-second/home-second.component';
import { HomeComponent } from './home/home.component';
import { HomeThirdComponent } from './home-third/home-third.component';
import { HomeFourthComponent } from './home-fourth/home-fourth.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';

//page scroll
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { LoginSecondComponent } from './login-second/login-second.component';
import { LoginFirstComponent } from './login-first/login-first.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeFirstComponent,
    HomeSecondComponent,
    HomeComponent,
    HomeThirdComponent,
    HomeFourthComponent,
    LoginComponent,
    NavbarLoginComponent,
    LoginSecondComponent,
    LoginFirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
