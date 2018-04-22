import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import * as moment from 'moment';

import { UserProvider } from '../../../providers/auth/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  currentUser: any;

  constructor(
    private navParams: NavParams,
    private userProvider: UserProvider
  ) {
    this.currentUser = this.navParams.get('user_data');
    this.currentUser.birth = moment().year() - this.currentUser.birth_year;
    console.log(this.currentUser);
  }

}
