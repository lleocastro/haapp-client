import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'page-form-auth',
  templateUrl: 'form-auth.html'
})
export class FormAuthPage {
  currentYear = moment().year();
  step: number;

  loginData: any;
  accountData: any;

  constructor() {
    this.loginData = {};
    this.accountData = {};
    this.setStep(1);
  }

  login() {
    this.setStep(2);
  }

  loginWithRaw() {
    console.log('loginWithRaw ', this.loginData);
  }

  loginWithFB() {
    console.log('loginWithFB');
  }

  setStep(index) {
    this.step = index;
  }

  newAccount() {
    console.log('newAccount ', this.accountData);
  }

}
