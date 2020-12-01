import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricingPacketsComponent } from './pricing-packets/pricing-packets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardAppsComponent } from './dashboard-apps/dashboard-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    CreateCompanyComponent,
    PricingPacketsComponent,
    DashboardComponent,
    LoginComponent,
    DashboardAppsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
