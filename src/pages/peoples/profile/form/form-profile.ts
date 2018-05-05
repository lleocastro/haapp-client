import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import * as _ from 'lodash';
import * as moment from 'moment';

import { UserProvider } from '../../../../providers/auth/user';

@Component({
  selector: 'page-form-profile',
  templateUrl: 'form-profile.html'
})
export class FormProfilePage {
  protected formData: any;

  tags: Array<any>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private userProvider: UserProvider,
    private alertCtrl: AlertController
  ) {
    this.formData = this.navParams.get('form_data');
    console.log(this.formData);
  }

  ionViewDidLoad() {
    this.tags = ['dev', 'comida', 'natureza', 'viagens', 'series', 'filmes', 'games',  'nerds', 'zumbis'];
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  save() {
    console.log(this.formData);
  }

  dismiss() {
    this.viewCtrl.dismiss({});
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
