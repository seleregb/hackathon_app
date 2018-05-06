import {Component} from '@angular/core';
import {
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  BenefitsComponent,
  RegistrationComponent,
  VisualizationComponent,
  ContactComponent,
  VoucherComponent
} from './components';
import { LoggerService} from './services/logger.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}
