import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { UserProvider } from '../../../providers/auth/user';
import { ChatProvider } from '../../../providers/chat/chat';

import { CodeEditorPage } from './code-editor/code-editor';

@Component({
  selector: 'page-bubble',
  templateUrl: 'bubble.html'
})
export class BubblePage implements OnInit  {

  chatData: any;
  currentUser: any;
  protected tabBarElement: any;

  chatMessage:any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private chatProvider: ChatProvider
  ) {
    this.chatMessage = {
      text: ''
    };

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
  }

  getImage(e) {
    console.log('get image');
  }

  showMessageImage(e, message) {
    message.showImage = true;
  }

  showCodeEditor(e) {
    this.modalCtrl.create(CodeEditorPage).present();
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

  goToProfile() {
    console.log('go profile');
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
