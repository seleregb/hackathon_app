import {Component} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}
