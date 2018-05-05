import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import {StepsModule} from 'primeng/steps';

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
    VisualizationComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, NgbModule.forRoot(),
    AppRoutes
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DashboardService, LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
