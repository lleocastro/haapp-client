import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { Mocks } from '../commons/mocks';
import { UserProvider } from '../auth/user';

@Injectable()
export class DiaryProvider {
  protected diaryPages: Array<any>;

  constructor(private http: Http) {
    this.diaryPages = [];
    this.loadDiaryPages();
  }

  protected loadDiaryPages() {
    let currentUser = UserProvider.getUser();
    let diaryPagesMock = new Mocks().diaryPagesMock();

    currentUser.following.forEach(following => {

      let diaryPage = _.filter(diaryPagesMock, (diaryPage) => {
        return diaryPage.user_id == following.user_id;
      });

      if (diaryPage.length) {
        this.diaryPages = _.concat(this.diaryPages, diaryPage);
      }

    });

  }

  getDiaryPages(): Array<any> {
    return this.diaryPages;
  }

}
