import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import questions from '../../../assets/questions_data';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router, private _fb: FormBuilder, private _loadingService: LoadingService) { }

  activeIndex: number = 1;
  nxtBtnClick: boolean = true;
  showNxtBtn: boolean = true;
  showPrevBtn: boolean = false;
  showSubmitBtn = false;

  benefitFormGroup: FormGroup;

  ngOnInit() {
    this._loadingService.show();
    this._loadingService.hide(1500);
  }

  initializeControls() {
    this.benefitFormGroup = this._fb.group({

    });
  }

  toggleBtnState() {
    console.log('current index', this.activeIndex);
    this.showNxtBtn = this.activeIndex == 1 ? true : false;
    this.showPrevBtn = this.activeIndex >= 2 ? true : false;
    this.showSubmitBtn = this.activeIndex == 2;
  }

  next() {
    

    const el1: HTMLElement = <HTMLElement>document.getElementById('card' + this.activeIndex.toString());
    el1.hidden = true;

    this.activeIndex++;
this.toggleBtnState();
    const el2: HTMLElement = <HTMLElement>document.getElementById('card' + this.activeIndex.toString());
    el2.hidden = false;

}

previous() {
    
    const el1: HTMLElement = <HTMLElement>document.getElementById('card' + this.activeIndex.toString());
    el1.hidden = true;

    this.activeIndex--;
this.toggleBtnState();
  

    const el2: HTMLElement = <HTMLElement>document.getElementById('card' + this.activeIndex.toString());
    el2.hidden = false;
}

showBenefits() {
  this._router.navigate(['/benefits']);
}

submit() {
  this._router.navigate(['/voucher']);
}

}
