import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { VoucherComponent } from './components/voucher/voucher.component';

import { DashboardService } from './services/dashboard.service';
import { LoggerService } from './services/logger.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    VoucherComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    VisualizationComponent,
    RegistrationComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutes, ReactiveFormsModule, FormsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DashboardService, LoggerService, LoadingService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
