import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from 'lodash';

@Component({
  selector: 'page-register-form',
  templateUrl: 'form.html'
})
export class RegisterFormPage {

  constructor(private navCtrl: NavController) {}
}
