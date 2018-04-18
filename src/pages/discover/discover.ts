import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/auth/user';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  currentUser: any;
  relationship: any;

  constructor(public navCtrl: NavController) {
    this.currentUser = UserProvider.getUser();
    this.relationship = 'feed';
  }

  segmentChanged(e) {
    console.log(e, this.relationship);
  }

}
