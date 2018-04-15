import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { UserProvider } from '../../providers/auth/user';
import { ChatProvider } from '../../providers/chat/chat';

import { BubblePage } from './bubble/bubble';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage implements OnInit, OnChanges, OnDestroy  {

  currentUser: any;
  chatPreviewList: Array<any>;

  constructor(
    public navCtrl: NavController,
    private chatProvider: ChatProvider,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.currentUser = UserProvider.getUser();
  }

  ngOnInit() {
    this.chatPreviewList = this.chatProvider.getMyChat();
    this.chatPreviewList.sort((a, b) => b.is_favority);
  }

  ngOnChanges() {
    console.info('ngOnChanges');
  }

  ngOnDestroy() {
    console.info('ngOnDestroy');
  }

  openChatConversation(e, chatData) {
    this.navCtrl.push(BubblePage, {chat_data: chatData});
  }

  openChatOptions(e, chatData) {
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

}
