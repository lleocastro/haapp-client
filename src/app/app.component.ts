import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as _ from 'lodash';

import { UserProvider } from '../providers/auth/user';
import { ChatProvider } from '../providers/chat/chat';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userProvider: UserProvider,
    chatProvider: ChatProvider
  ) {

    /**
     * ...
     */
    this.mountChat(chatProvider, userProvider);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private mountChat(chatProvider: any, userProvider: any) {
    let currentUserId = UserProvider.getUser().user_id;
    let chatList = [];

    chatProvider.uuids().forEach(uuid => {
      let chat = chatProvider.getChatByUUID(uuid.chat_uuid);
      let userAssociated;

      uuid.users_id_associated.forEach(user_id => {
        if (user_id !== currentUserId) {
          userAssociated = userProvider.getUserById(user_id);
        }
      });

      if (!(_.isEmpty(chat) || _.isEmpty(userAssociated))) {
        chat.messages_count = chat.messages.length;

        chat.unread_counter = _.filter(chat.messages, (message) => {
          return message.read == false && message.user_id !== currentUserId;
        }).length;

        chatList.push(_.assign(chat, userAssociated));
      }
    });

    chatProvider.setMyChat(chatList);
  }

}
