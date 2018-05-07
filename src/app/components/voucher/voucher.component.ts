import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

  constructor(private _loadingService: LoadingService) { }

  currentDate = Date.now();

  ngOnInit() {
    this._loadingService.show();
    this._loadingService.hide(1500);
  }

}
