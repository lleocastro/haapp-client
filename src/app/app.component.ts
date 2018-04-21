import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { Network } from '@ionic-native/network';
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
    private network: Network,
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

    // watch network for a disconnect
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });

    // stop disconnect watch
    // disconnectSubscription.unsubscribe();

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

    // stop connect watch
    // connectSubscription.unsubscribe();

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
