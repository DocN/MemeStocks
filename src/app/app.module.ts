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

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { LoginframeComponent } from './loginmodules/loginframe/loginframe.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

const appRoutes:Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'navbartest',
    component: NavbarComponent,
  },
  {
    path: 'login',
    component: LoginPortalComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    LoginPortalComponent,
    LoginframeComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    NgxCarouselModule,
    RouterModule.forRoot(appRoutes, {useHash:true}),
    FusionChartsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
