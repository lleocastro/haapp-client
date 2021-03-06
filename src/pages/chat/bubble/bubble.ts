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

  chatBoxSpandable: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private chatProvider: ChatProvider
  ) {
    this.currentUser = UserProvider.getUser();
    this.chatData = this.navParams.get('chat_data');
    this.chatMessage = { text: '', user_id: this.currentUser.user_id};
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    this.chatBoxSpandable = { height: 16 };
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

  showEmojis(e) {
    console.log('show emojis');
  }

  showMessageImage(e, message) {
    message.showImage = true;
  }

  isTyping(e) {
    if (e.keyCode == 13 && this.chatBoxSpandable.height < 120) {
      this.chatBoxSpandable.height += 25;
    } else if (e.keyCode == 8 && this.chatBoxSpandable.height > 16) {
      this.chatBoxSpandable.height -= 5;
    }

    console.log('is typing... ');
  }

  send(e) {
    if (!this.chatMessage.text.length) return;

    let payload = {
      text: this.chatMessage.text,
      user_id: this.chatMessage.user_id,
      created_at: new Date()
    }

    this.chatData.messages.push(payload);
    this.chatMessage.text = '';

    this.chatBoxSpandable.height = 16;
    console.log('send ', payload);
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
