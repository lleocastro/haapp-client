import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/auth/user';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class Header {

  currentUser: any;
  @Input() title;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.currentUser = UserProvider.getUser();
    console.log(this.title);
  }
}
