import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/auth/user';

import { ConfigsPage } from '../configs/configs';

@Component({
  selector: 'page-secrets',
  templateUrl: 'secrets.html'
})
export class SecretsPage {

  currentUser: any;
  relationship: any;

  constructor(public navCtrl: NavController) {
    this.currentUser = UserProvider.getUser();
    this.relationship = 'feed';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  segmentChanged(e) {
    console.log(e, this.relationship);
  }

  goToSelectedProfile(chat) {
    console.log(chat);
  }

  goToConfigs() {
    this.navCtrl.push(ConfigsPage);
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
