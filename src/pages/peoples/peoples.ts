import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/auth/user';

import { ConfigsPage } from '../configs/configs';

@Component({
  selector: 'page-peoples',
  templateUrl: 'peoples.html'
})
export class PeoplesPage {

  currentUser: any;

  constructor(public navCtrl: NavController) {
    this.currentUser = UserProvider.getUser();
  }

  goToSelectedProfile(chat) {
    console.log(chat);
  }

  goToConfigs() {
    this.navCtrl.push(ConfigsPage);
  }

}
