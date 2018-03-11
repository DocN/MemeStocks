import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';

//cara imports
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';




const appRoutes:Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'navbartest',
    component: NavbarComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    NgxCarouselModule,
    RouterModule.forRoot(appRoutes, {useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
