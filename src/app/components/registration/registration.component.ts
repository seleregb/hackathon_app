import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router, private _fb: FormBuilder) { }

  activeIndex: number = 1;
  nxtBtnClick: boolean = true;
  showNxtBtn: boolean = true;
  showPrevBtn: boolean = false;

  benefitFormGroup: FormGroup;

  ngOnInit() {
  }

  initializeControls() {
    this.benefitFormGroup = this._fb.group({

    });
  }

  toggleBtnState() {
    console.log('current index', this.activeIndex);
    this.showNxtBtn = this.activeIndex >= 1 && this.activeIndex <= 4 ? true : false;
    this.showPrevBtn = this.activeIndex >= 2 && this.activeIndex <= 5 ? true : false;
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

}
