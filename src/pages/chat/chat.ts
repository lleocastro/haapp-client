import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { UserProvider } from '../../providers/auth/user';
import { ChatProvider } from '../../providers/chat/chat';

import { ProfilePage } from '../peoples/profile/profile';
import { BubblePage } from './bubble/bubble';
import { ConfigsPage } from '../configs/configs';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  currentUser: any;
  chatPreviewList: Array<any>;

  constructor(
    public navCtrl: NavController,
    private chatProvider: ChatProvider,
    private vibration: Vibration,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.currentUser = UserProvider.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    this.chatPreviewList = this.chatProvider.getMyChat();
    this.chatPreviewList.sort((a, b) => b.unread_counter);
    console.log(this.chatPreviewList);
  }

  openChatConversation(e, chatData) {
    this.navCtrl.push(BubblePage, {chat_data: chatData});
  }

  openChatOptions(e, chatData) {
    // Vibrate the device for a second
    // Duration is ignored on iOS.
    this.vibration.vibrate(1000);

    chatData.openedOptions = true;

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecionado',
      buttons: [
        {
          text: 'Apagar Conversa',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Tornar Favorito',
          role: 'favority',
          handler: () => {
            console.log('Favority clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            chatData.openedOptions = false;
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  initNewConversation(e) {
    console.log(e);
  }

  goToSelectedProfile(data) {
    this.navCtrl.push(ProfilePage, {user_data: data});
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
