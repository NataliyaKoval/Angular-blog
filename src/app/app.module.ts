import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {InputComponent} from './input/input.component';
import {CarouselComponent} from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    InputComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
