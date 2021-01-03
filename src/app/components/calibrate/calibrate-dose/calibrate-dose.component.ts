import {Component, OnInit} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-calibrate-dose',
  templateUrl: './calibrate-dose.component.html',
  styleUrls: ['./calibrate-dose.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class CalibrateDoseComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [''],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: [''],
    });
  }
}
