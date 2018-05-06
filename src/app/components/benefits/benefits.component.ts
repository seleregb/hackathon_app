import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import benefitData from '../../../assets/sample_data';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  serviceBenefits: any[];
  actionText = 'show details';

  constructor(private _logger: LoggerService, private _loadingService: LoadingService) { }

  ngOnInit() {
    this._loadingService.show();
    this.serviceBenefits = benefitData.slice(0,4);
    console.log('collected benfits data', this.serviceBenefits);
    this._loadingService.hide(2000);
  }

}
