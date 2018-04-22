import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from 'lodash';

import { UserProvider } from '../../providers/auth/user';

import { ProfilePage } from './profile/profile';
import { ConfigsPage } from '../configs/configs';

@Component({
  selector: 'page-peoples',
  templateUrl: 'peoples.html'
})
export class PeoplesPage {

  currentUser: any;

  constructor(
    private navCtrl: NavController,
    private userProvider: UserProvider
  ) {
    this.currentUser = UserProvider.getUser();
    this.loadFollowingUsers();
  }

  protected loadFollowingUsers() {
    this.currentUser.following.forEach(follower => {
      _.merge(follower, this.userProvider.getUserById(follower.user_id));
    });
  }

  goToSelectedProfile(user) {
    this.navCtrl.push(ProfilePage, {user_data: user});
  }

  goToConfigs() {
    this.navCtrl.push(ConfigsPage);
  }

}
