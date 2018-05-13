import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { UserProvider } from '../../../providers/auth/user';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  currentUser: any;

  quoteObj: any;

  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController
  ) {
    this.currentUser = UserProvider.getUser();
    this.quoteObj = {text: ''};
  }

  ionViewDidLoad() {}

  getImage(e) {
    console.log('get image');
  }

  publish(e) {
    let payload = {
      user_id: this.currentUser.user_id,
      text: this.quoteObj.text,
      image_url: null, //this.quoteObj.image_url,
      explicit_image: this.quoteObj.explicit_image || false,
      created_at: new Date()
    };

    this.reset();
    console.log(payload);
  }

  private reset() {
    this.quoteObj.text = '';
    this.quoteObj.image_url = null;
  }

  dismiss() {
    this.viewCtrl.dismiss({});
  }

}
