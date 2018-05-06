import {Component, OnInit} from '@angular/core';
// import {StepsModule} from 'primeng/steps'; import {MenuItem} from
// 'primeng/api';
import {LoggerService} from '../../services/logger.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('inactive => active', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [animate(1000, style({transform: 'translateX(100%)'}))])
    ])]
})

export class HomeComponent implements OnInit {

  // items : MenuItem[];
  activeIndex : number = 0;

  slideState: String = "inactive";

  constructor(private logger : LoggerService, private _router: Router, private _loadingService: LoadingService) {}

  ngOnInit() {
    this._loadingService.show();
    this.slideState = "active";
    this._loadingService.hide(1500);
  }

  handleChange(event) {
    this
      .logger
      .log(`clicked step ${event}`);
  }

  navigateToRegistration() {
    this._router.navigate(['/registration']);
  }

}
