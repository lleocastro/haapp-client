import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { UserProvider } from '../../providers/auth/user';
import { SecretsProvider } from '../../providers/secrets/secrets';

import { ConfigsPage } from '../configs/configs';
import { QuotePage } from './quote/quote';

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
    private modalCtrl: ModalController
  ) {
    this.secrets = [];
    this.currentUser = UserProvider.getUser();
  }

  ionViewDidLoad() {
    this.secrets = this.secretsProvider.getSecrets();
    console.log(this.secrets);
  }

  showSecretImage(e, secret) {
    secret.showImage = true;
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
