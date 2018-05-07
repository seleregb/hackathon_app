import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsComponent } from './benefits.component';
import { LoadingService } from '../../services/loading.service';
import { LoggerService } from '../../services/logger.service';

describe('BenefitsComponent', () => {
  let component: BenefitsComponent;
  let fixture: ComponentFixture<BenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsComponent ],
      providers : [
        LoadingService, LoggerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
