import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/Rx';

import { Mocks } from '../commons/mocks';

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

  uuids() {
    return new Mocks().uuidsMock();
  }

}
