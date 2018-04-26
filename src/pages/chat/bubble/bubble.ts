import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { UserProvider } from '../../../providers/auth/user';
import { ChatProvider } from '../../../providers/chat/chat';

import { ProfilePage } from '../../peoples/profile/profile';

@Component({
  selector: 'page-bubble',
  templateUrl: 'bubble.html'
})
export class BubblePage {
  protected tabBarElement: any;

  chatData: any;
  currentUser: any;
  chatMessage: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private chatProvider: ChatProvider
  ) {
    this.chatMessage = { text: '' };
    this.currentUser = UserProvider.getUser();
    this.chatData = this.navParams.get('chat_data');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
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
  }

  getImage(e) {
    console.log('get image');
  }

  showMessageImage(e, message) {
    message.showImage = true;
  }

  isTyping(e) {
    console.log('is typing...');
  }

  send(e) {
    console.log('send');
  }

  messageTapped(e, message) {
    message.selected = true;
    console.log(e, message);
  }

  showBubbleOptions() {
    console.log('bubble options');
  }

  goToProfile(data) {
    this.navCtrl.push(ProfilePage, {user_data: data});
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
