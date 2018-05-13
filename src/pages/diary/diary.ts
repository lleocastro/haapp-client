import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';

import { UserProvider } from '../../providers/auth/user';
import { DiaryProvider } from '../../providers/diary/diary';

import { ConfigsPage } from '../configs/configs';
import { QuotePage } from './quote/quote';
import { CommentsPage } from './comments/comments';

import { DiaryUtils } from './diary-utils';

@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {
  currentUser: any;
  diaryPages: Array<any>;

  constructor(
    private navCtrl: NavController,
    private diaryProvider: DiaryProvider,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.diaryPages = [];
    this.currentUser = UserProvider.getUser();
  }

  ionViewDidLoad() {
    this.diaryPages = this.diaryProvider.getDiaryPages();
    DiaryUtils.likesLoad(this.diaryPages, this.currentUser);
    this.commentsLoad();

    console.log(this.diaryPages);
  }

  showImage(e, diaryPage) {
    diaryPage.showImage = true;
  }

  likeToggle(e, diaryPage) {
    DiaryUtils.likeToggle(diaryPage, this.currentUser, null);
  }

  private commentsLoad() {
    if (this.diaryPages.length) {
      this.diaryPages.forEach((diaryPage: any) => {
        if (diaryPage.comments && diaryPage.comments.length) {
          diaryPage.comments_counter = _.size(diaryPage.comments);
        }
      });
    }
  }

  showComments(e, diaryPage) {
    let modal = this.modalCtrl.create(CommentsPage, {diaryPage_data: diaryPage});
    modal.present();
  }

  openDiaryOptions(e, diaryPage) {
    DiaryUtils.openManipulateOptions(this.actionSheetCtrl, diaryPage, {
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

  goToQuote(e) {
    let modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }

  goToSelectedProfile(chat) {
    console.log(chat);
  }

  goToConfigs() {
    this.navCtrl.push(ConfigsPage);
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
