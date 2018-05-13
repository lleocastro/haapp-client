import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { PeoplesPage } from '../peoples/peoples';
import { DiaryPage } from '../diary/diary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chat = ChatPage;
  peoples = PeoplesPage;
  diary = DiaryPage;

  chatIcon: string;
  peopleIcon: string;
  diaryIcon: string;

  constructor() {
    this.tabSelected(1);
  }

  ionViewDidEnter() { }

  tabSelected(index) {
    this.resetTabIcons();

    switch(index) {
      case 1:
        this.chatIcon = 'ios-chatbubbles';
        break;
      case 2:
        this.peopleIcon = 'ios-people';
        break;
      case 3:
        this.diaryIcon = 'ios-flame';
        break;
    }
  }

  private resetTabIcons(): void {
    this.chatIcon = 'ios-chatbubbles-outline';
    this.peopleIcon = 'ios-people-outline';
    this.diaryIcon = 'ios-flame-outline';
  }

}
