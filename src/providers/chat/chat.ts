import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { Mocks } from '../commons/mocks';
import { UserProvider } from '../auth/user';

@Injectable()
export class ChatProvider {

  private uuids: Array<any>;
  private chatList: Array<any>;

  constructor(private http: Http, private userProvider: UserProvider) {
    this.chatList = new Mocks().chatMessagesMock();
    this.uuids = new Mocks().uuidsMock();
  }

  getChatByUUID(uuid: string) {
    return this.chatList[_.findIndex(this.chatList, {chat_uuid: uuid})];
  }

  loadChatData(user_id: number) {
    let chat = _.find(this.mountChat(), (chat) => {
      return chat.user_id === user_id;
    });

    if (!chat) {
      let uuid = this.uuidGenerator();

      chat = {
        chat_uuid: uuid,
        last_view: new Date(),
        messages: []
      }

      let newUuid = {
        users_id_associated: [UserProvider.getUser().user_id, user_id],
        chat_uuid: uuid
      }

      console.log(chat, newUuid);
      return _.assign(chat, this.userProvider.getUserById(user_id));
    }

    return chat;
  }

  mountChat() {
    let currentUserId = UserProvider.getUser().user_id;
    let chatList = [];

    this.getUuids().forEach(uuid => {
      let chat = this.getChatByUUID(uuid.chat_uuid);
      let userAssociated;

      uuid.users_id_associated.forEach(user_id => {
        if (user_id !== currentUserId) {
          userAssociated = this.userProvider.getUserById(user_id);
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

    return chatList;
  }

  getUuids() {
    return this.uuids;
  }

  /**
   * UUID Generator
   */
  protected uuidGenerator() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
