import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { Mocks } from '../commons/mocks';
import { UserProvider } from '../auth/user';

@Injectable()
export class ChatProvider {

  private chatList: Array<any>;
  private myChat: Array<any>;

  constructor(private http: Http) {
    this.chatList = new Mocks().chatMessagesMock();
  }

  getMyChat(): Array<any> {
    return this.myChat;
  }

  setMyChat(chat: Array<any>) {
    this.myChat = chat;
  }

  getChatByUUID(uuid: string) {
    return this.chatList[_.findIndex(this.chatList, {chat_uuid: uuid})];
  }

  initNewChat(withUserId: number) {
    let uuid = this.uuidGenerator();

    let payload = {
      users_id_associated: [UserProvider.getUser().user_id, withUserId],
      chat_uuid: uuid
    };

    console.log(payload);

    return {chat_uuid: uuid};
  }

  uuids() {
    return new Mocks().uuidsMock();
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
