import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'registration', component: RegistrationComponent},
    { path: 'visualization', component: VisualizationComponent},
    { path: 'benefits', component: BenefitsComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'voucher', component: VoucherComponent },
    
 ];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
