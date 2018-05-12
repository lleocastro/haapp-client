import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';

import { UserProvider } from '../../providers/auth/user';
import { SecretsProvider } from '../../providers/secrets/secrets';

import { ConfigsPage } from '../configs/configs';
import { QuotePage } from './quote/quote';
import { CommentsPage } from './comments/comments';

@Component({
  selector: 'page-secrets',
  templateUrl: 'secrets.html'
})
export class SecretsPage {
  currentUser: any;
  secrets: Array<any>;

  constructor(
    private navCtrl: NavController,
    private secretsProvider: SecretsProvider,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.secrets = [];
    this.currentUser = UserProvider.getUser();
  }

  ionViewDidLoad() {
    this.secrets = this.secretsProvider.getSecrets();

    this.likesLoad();
    this.commentsLoad();

    console.log(this.secrets);
  }

  showSecretImage(e, secret) {
    secret.showImage = true;
  }

  private likesLoad() {
    if (this.secrets.length) {

      this.secrets.forEach((secret: any) => {

        if (secret.likes && secret.likes.length) {
          secret.likes_counter = _.size(secret.likes);

          let userIsLiked = _.findIndex(secret.likes, (like: any) => {
            return like.user_id == this.currentUser.user_id;
          });

          if (userIsLiked != -1) {
            secret.liked = true;
          } else {
            secret.liked = false;
          }

        }

      });

    }
  }

  likeToggle(e, secret) {
    let liked = _.findIndex(secret.likes, (like: any) => {
      return like.user_id == this.currentUser.user_id;
    });

    if (!secret.likes_counter) {
      secret.likes_counter = 0;
    }

    if (liked == -1) {
      secret.likes.push({user_id: this.currentUser.user_id});
      secret.likes_counter++;
      secret.liked = true;
    } else {
      _.remove(secret.likes, (like: any) => {
        return like.user_id == this.currentUser.user_id;
      });

      secret.likes_counter--;
      secret.liked = false;
    }

    console.log(secret);
  }

  private commentsLoad() {
    if (this.secrets.length) {
      this.secrets.forEach((secret: any) => {
        if (secret.comments && secret.comments.length) {
          secret.comments_counter = _.size(secret.comments);
        }
      });
    }
  }

  showComments(e, secret) {
    let modal = this.modalCtrl.create(CommentsPage, {secret_data: secret});
    modal.present();
  }

  openSecretOptions(e, secret) {
    secret.openedOptions = true;

    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Denunciar',
          icon: 'ios-warning-outline',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'ios-close-circle-outline',
          role: 'cancel',
          handler: () => {
            secret.openedOptions = false;
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
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
