import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../../providers/auth/user';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {
  currentUser: any;
  secret_data: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.currentUser = UserProvider.getUser();
    this.secret_data = this.navParams.get('secret_data');
  }

  dismiss() {
    this.viewCtrl.dismiss({});
  }

}
