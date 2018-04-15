import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { Mocks } from '../commons/mocks';

@Injectable()
export class UserProvider {

  private users: Array<any>;
  private static currentUser: any;

  constructor(private http: Http) {
    this.users = new Mocks().usersMock();

    if (!UserProvider.currentUser) {
      UserProvider.currentUser = this.users[_.findIndex(this.users, {user_id: 0})];
    }

  }

  static getUser() {
    UserProvider.appendAvatarPhotoUrl(UserProvider.currentUser);
    return UserProvider.currentUser;
  }

  getUserById(id: number) {
    if (id == UserProvider.currentUser.user_id) {
      return UserProvider.getUser();
    }

    let user = this.users[_.findIndex(this.users, {user_id: id})];
    UserProvider.appendAvatarPhotoUrl(user);

    return user;
  }

  private static appendAvatarPhotoUrl(userObj: any) {
    userObj.avatar_url = userObj.photos[_.findIndex(userObj.photos, {default: true})].url;
  }

}
