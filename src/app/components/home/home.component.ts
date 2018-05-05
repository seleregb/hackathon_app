import {Component, OnInit} from '@angular/core';
// import {StepsModule} from 'primeng/steps';
// import {MenuItem} from 'primeng/api';
import { LoggerService } from '../../services/logger.service';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

  // items : MenuItem[];
  activeIndex: number = 0;

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    
  }

  handleChange(event) {
    this.logger.log(`clicked step ${event}`);
  }

}
