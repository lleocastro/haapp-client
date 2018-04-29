import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { Mocks } from '../commons/mocks';
import { UserProvider } from '../auth/user';

@Injectable()
export class SecretsProvider {
  protected secrets: Array<any>;

  constructor(private http: Http) {
    this.secrets = [];
    this.loadSecrets();
  }

  protected loadSecrets() {
    let currentUser = UserProvider.getUser();
    let secretsMock = new Mocks().secretsMock();

    currentUser.following.forEach(following => {

      let secret = _.filter(secretsMock, (secret) => {
        return secret.user_id == following.user_id;
      });

      if (secret.length) {
        this.secrets = _.concat(this.secrets, secret);
      }

    });

  }

  getSecrets(): Array<any> {
    return this.secrets;
  }

}
