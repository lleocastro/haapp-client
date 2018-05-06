import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { FormProfilePage } from '../../peoples/profile/form/form-profile';

@Component({
  selector: 'page-form-auth',
  templateUrl: 'form-auth.html'
})
export class FormAuthPage {
  currentYear = moment().year();
  step: number;

  loginData: any;
  accountData: any;

  constructor(private modalCtrl: ModalController) {
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
    let modal = this.modalCtrl.create(FormProfilePage, {form_data: {
      invite_code: this.accountData.inviteCode,
      photos: []
    }});

    modal.present();
  }

}
