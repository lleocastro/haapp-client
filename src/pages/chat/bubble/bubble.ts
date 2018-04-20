import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { UserProvider } from '../../../providers/auth/user';
import { ChatProvider } from '../../../providers/chat/chat';

@Component({
  selector: 'page-bubble',
  templateUrl: 'bubble.html'
})
export class BubblePage implements OnInit  {

  chatData: any;
  currentUser: any;
  protected tabBarElement: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private chatProvider: ChatProvider,
    private toastCtrl: ToastController
  ) {
    this.chatData = this.navParams.get('chat_data');
    this.currentUser = UserProvider.getUser();
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ngOnInit() {
    console.log(this.chatData);
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  likeToggle(message) {
    message.liked = !message.liked;

    if (message.liked) {
      let toast = this.toastCtrl.create({
        message: 'Uhuhh! Curtiu...',
        duration: 3000
      });

      toast.present();
    }
  }

  messageTapped(e, message) {
    message.selected = true;
    console.log(e, message);
  }

  showBubbleOptions() {
    console.log('Bubble options...');
  }

  /**
   * UUID Generator
   */
  uuidGenerator() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
