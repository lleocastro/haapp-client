import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import * as _ from 'lodash';
import * as moment from 'moment';

import { UserProvider } from '../../../providers/auth/user';

import { BubblePage } from '../../chat/bubble/bubble';
import { ChatProvider } from '../../../providers/chat/chat';
import { FormProfilePage } from './form/form-profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  currentUser: any;
  authUser: any;

  lockUnecessaryResourcesForAuthUser: boolean;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private userProvider: UserProvider,
    private chatProvider: ChatProvider,
    private alertCtrl: AlertController
  ) {
    this.currentUser = this.navParams.get('user_data');
    this.authUser = UserProvider.getUser();
  }

  ionViewDidLoad() {
    this.lockUnecessaryResourcesForAuthUser = !(this.currentUser.user_id == this.authUser.user_id);
    this.profileViewCounter();
    this.followLoad();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  private followLoad() {
    let currentUserId = this.currentUser.user_id;

    this.authUser.im_follower = _.findIndex(this.authUser.following, (follower: any) => {
      return follower.user_id == currentUserId;
    });

  }

  protected profileViewCounter() {
    let viewSum = _.findIndex(this.currentUser.profile_views, (view: any) => {
      return view.user_id == this.authUser.user_id;
    });

    if (viewSum == -1) {
      this.currentUser.profile_views.push({user_id: this.authUser.user_id});
    }

    console.log(this.currentUser);
  }

  followToggle() {
    if (!this.lockUnecessaryResourcesForAuthUser) return;

    if (this.authUser.im_follower == -1) {
      let newFollower = {user_id: this.currentUser.user_id};

      this.currentUser.followers.push({user_id: this.authUser.user_id});

      this.authUser.following.push(newFollower);
      this.authUser.im_follower = newFollower;
    } else {
      _.remove(this.authUser.following, (follower: any) => {
        return follower.user_id == this.currentUser.user_id;
      })

      _.remove(this.currentUser.followers, (follower: any) => {
        return follower.user_id == this.authUser.user_id;
      });

      this.authUser.im_follower = -1;
    }

    console.log(this.currentUser, this.authUser);
  }

  goToNewChat() {
    this.navCtrl.push(BubblePage, {
      chat_data: this.chatProvider.loadChatData(this.currentUser.user_id)
    });
  }

  editAuthUserProfile() {
    let modal = this.modalCtrl.create(FormProfilePage, {form_data: this.currentUser});
    modal.present();
  }

  reportProfilePrompt() {
    if (!this.lockUnecessaryResourcesForAuthUser) return;

    let prompt = this.alertCtrl.create({
      title: 'Denunciar @' + this.currentUser.username,
      message: 'Informe o motivo pelo qual está denunciando este perfil.',
      inputs: [
        {
          name: 'reason',
          placeholder: 'Motivo da denuncia?'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked', data);
          }
        },
        {
          text: 'Enviar',
          handler: (data) => this.reportProfile(data.reason)
        }
      ]
    });

    prompt.present();
  }

  protected reportProfile(reason: string) {
    if (this.lockUnecessaryResourcesForAuthUser && !reason.length) return;

    let payload = {
      user_id_reported: this.currentUser.user_id,
      by_user_id: this.authUser.user_id,
      reason: reason
    };

    console.log(payload);
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
