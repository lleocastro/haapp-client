import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { PeoplesPage } from '../peoples/peoples';
import { DiscoverPage } from '../discover/discover';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chat = ChatPage;
  peoples = PeoplesPage;
  discover = DiscoverPage;

  chatIcon: string;
  peopleIcon: string;
  discoverIcon: string;

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
        this.peopleIcon = 'md-people';
        break;
      case 3:
        this.discoverIcon = 'md-flame';
        break;
    }
  }

  private resetTabIcons(): void {
    this.chatIcon = 'ios-chatbubbles-outline';
    this.peopleIcon = 'ios-people-outline';
    this.discoverIcon = 'ios-flame-outline';
  }

}
