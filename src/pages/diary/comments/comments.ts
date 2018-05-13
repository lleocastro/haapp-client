import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';

import { UserProvider } from '../../../providers/auth/user';

import { DiaryUtils } from '../diary-utils';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {
  currentUser: any;
  diaryPage_data: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private viewCtrl: ViewController
  ) {
    this.currentUser = UserProvider.getUser();
    this.diaryPage_data = this.navParams.get('diaryPage_data');
    DiaryUtils.likesLoad(this.diaryPage_data.comments, this.currentUser);
  }

  likeToggle(e, comment) {
    DiaryUtils.likeToggle(comment, this.currentUser, null);
  }

  openDiaryCommentOptions(e, comment) {
    DiaryUtils.openManipulateOptions(this.actionSheetCtrl, comment, {
      delete: () => {
        console.log('Delete clicked');
      },
      report: () => {
        console.log('Report clicked');
      },
      cancel: () => {
        console.log('Cancel clicked');
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss({});
  }

}
